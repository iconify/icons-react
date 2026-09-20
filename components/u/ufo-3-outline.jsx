import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nadiy9iqm.css';
import '../../css/h/huqlmoo_p.css';
import '../../css/c/cryfmzb_q.css';
import '../../css/m/mrqy8zbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nadiy9iqm"/><path class="huqlmoo_p"/><path class="cryfmzb_q"/><path clip-rule="evenodd" class="mrqy8zbje"/></g>`,
		"fallback": "solar:ufo-3-outline",
	});
}

export default Component;
