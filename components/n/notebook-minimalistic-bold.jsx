import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ux8immk2u.css';
import '../../css/y/ygv_nlvpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ux8immk2u"/><path class="ygv_nlvpv"/></g>`,
		"fallback": "solar:notebook-minimalistic-bold",
	});
}

export default Component;
