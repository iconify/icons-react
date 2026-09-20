import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/t/t8nx60bkw.css';
import '../../css/c/c7w-2cb_a.css';
import '../../css/r/r_poly91m.css';
import '../../css/j/jds3y3oir.css';
import '../../css/k/k34s5gtmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="t8nx60bkw"/><path class="c7w-2cb_a"/><path class="r_poly91m"/><path class="jds3y3oir"/><path class="k34s5gtmh"/></g>`,
		"fallback": "solar:users-group-two-rounded-broken",
	});
}

export default Component;
