import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohsv2hiuv.css';
import '../../css/p/ptg87ibhy.css';
import '../../css/b/b8qhu_-ma.css';
import '../../css/t/t2z265b2q.css';
import '../../css/l/lx3zoyb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ohsv2hiuv"/><path class="ptg87ibhy"/><path class="b8qhu_-ma"/><path class="t2z265b2q"/><path class="lx3zoyb_j"/></g>`,
		"fallback": "solar:wallet-money-broken",
	});
}

export default Component;
