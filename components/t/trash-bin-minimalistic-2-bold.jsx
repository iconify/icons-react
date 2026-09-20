import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qf-6pvbnv.css';
import '../../css/d/dr6_rywbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qf-6pvbnv"/><path class="dr6_rywbb"/></g>`,
		"fallback": "solar:trash-bin-minimalistic-2-bold",
	});
}

export default Component;
