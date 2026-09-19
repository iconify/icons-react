import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds4-w6bvr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds4-w6bvr"/>`,
		"fallback": "fa7-solid:truck-plane",
	});
}

export default Component;
