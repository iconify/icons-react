import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_lhe9xti.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_lhe9xti"/>`,
		"fallback": "fa7-solid:tint",
	});
}

export default Component;
