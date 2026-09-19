import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxb_m5bce.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxb_m5bce"/>`,
		"fallback": "fa7-solid:trash",
	});
}

export default Component;
