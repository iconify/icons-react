import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kdx2-qp7s.css';
import '../../css/s/s0ay1abnm.css';
import '../../css/w/w37drss5a.css';
import '../../css/p/p2-28vwqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kdx2-qp7s"/><path class="s0ay1abnm"/><path class="w37drss5a"/><path class="p2-28vwqt"/></g>`,
		"fallback": "solar:watch-round-linear",
	});
}

export default Component;
