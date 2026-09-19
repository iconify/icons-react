import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erzf03bmv.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fch06fn7n.css';
import '../../css/p/p6oy09bhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erzf03bmv"/><g class="d2kvgvbvc"><path class="fch06fn7n"/><path class="p6oy09bhi"/></g>`,
		"fallback": "flag:tt-1x1",
	});
}

export default Component;
