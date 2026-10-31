import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pcb1vbcle.css';
import '../../css/e/em57w9skn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pcb1vbcle"/><path class="em57w9skn"/></g>`,
		"fallback": "coolicons:volume-off-bulk-round",
	});
}

export default Component;
