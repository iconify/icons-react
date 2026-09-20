import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bxduv9kxn.css';
import '../../css/b/bkexmzdax.css';
import '../../css/o/o431y0bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bxduv9kxn"/><path class="bkexmzdax"/><path class="o431y0bll"/></g>`,
		"fallback": "solar:sim-cards-linear",
	});
}

export default Component;
