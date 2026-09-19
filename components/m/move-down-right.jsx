import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb87lb4xa.css';
import '../../css/k/k68b_inzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wb87lb4xa"/><path class="k68b_inzt"/></g>`,
		"fallback": "hugeicons:move-down-right",
	});
}

export default Component;
