import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c24p6_bwi.css';
import '../../css/t/txcz6vtgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c24p6_bwi"/><path class="txcz6vtgn"/></g>`,
		"fallback": "hugeicons:parabola-01",
	});
}

export default Component;
