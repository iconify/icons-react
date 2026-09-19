import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_c5a5b4u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_c5a5b4u"/>`,
		"fallback": "fluent-mdl2:rename",
	});
}

export default Component;
