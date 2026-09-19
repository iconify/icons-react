import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_lx8hlse.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_lx8hlse"/>`,
		"fallback": "fluent-mdl2:remove-from-trash",
	});
}

export default Component;
