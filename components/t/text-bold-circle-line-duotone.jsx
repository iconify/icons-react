import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cxzlycbfj.css';
import '../../css/r/r6ybk4brv.css';
import '../../css/r/rwmcjfboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cxzlycbfj"/><path class="r6ybk4brv"/><path class="rwmcjfboi"/></g>`,
		"fallback": "solar:text-bold-circle-line-duotone",
	});
}

export default Component;
