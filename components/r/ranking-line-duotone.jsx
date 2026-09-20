import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hs8rvvlxb.css';
import '../../css/f/fu7ml01dv.css';
import '../../css/a/avvl2tizt.css';
import '../../css/s/sbmqfhzny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hs8rvvlxb"/><path class="fu7ml01dv"/><path class="avvl2tizt"/><path class="sbmqfhzny"/></g>`,
		"fallback": "solar:ranking-line-duotone",
	});
}

export default Component;
