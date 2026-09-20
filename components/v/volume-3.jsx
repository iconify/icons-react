import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sa7iy4w6q.css';
import '../../css/q/qac5hwbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sa7iy4w6q"/><path class="qac5hwbid"/></g>`,
		"fallback": "nrk:volume-3",
	});
}

export default Component;
