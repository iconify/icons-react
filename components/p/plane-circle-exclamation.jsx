import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl6ttu2ij.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl6ttu2ij"/>`,
		"fallback": "fa7-solid:plane-circle-exclamation",
	});
}

export default Component;
