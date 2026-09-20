import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/raucetsey.css';
import '../../css/u/uor89vbsf.css';
import '../../css/z/zeiub32xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="raucetsey"/><path class="uor89vbsf"/><path class="zeiub32xo"/></g>`,
		"fallback": "solar:menu-dots-vertical-bold",
	});
}

export default Component;
