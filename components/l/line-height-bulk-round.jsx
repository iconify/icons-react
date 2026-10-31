import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo_qhd1ro.css';
import '../../css/t/tg2i-ny4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uo_qhd1ro"/><path class="tg2i-ny4c"/></g>`,
		"fallback": "coolicons:line-height-bulk-round",
	});
}

export default Component;
