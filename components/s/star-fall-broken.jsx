import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/iylu1y18v.css';
import '../../css/o/on6khhbhh.css';
import '../../css/t/ti3g_bcpn.css';
import '../../css/q/qryul2gig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="iylu1y18v"/><path class="on6khhbhh"/><path class="ti3g_bcpn"/><path class="qryul2gig"/></g>`,
		"fallback": "solar:star-fall-broken",
	});
}

export default Component;
