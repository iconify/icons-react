import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ap2wj3w6d.css';
import '../../css/b/bimm2xbjr.css';
import '../../css/f/fnflbekrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ap2wj3w6d"/><path clip-rule="evenodd" class="bimm2xbjr"/><path clip-rule="evenodd" class="fnflbekrv"/></g>`,
		"fallback": "solar:phone-calling-rounded-outline",
	});
}

export default Component;
