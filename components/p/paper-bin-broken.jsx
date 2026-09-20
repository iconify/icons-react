import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r6t0m14hj.css';
import '../../css/x/xfcsm6b8b.css';
import '../../css/b/bbj_fcggl.css';
import '../../css/x/x4u_e4brr.css';
import '../../css/w/wn7dqvbng.css';
import '../../css/k/kq1mxjxmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r6t0m14hj"/><path class="xfcsm6b8b"/><path class="bbj_fcggl"/><path class="x4u_e4brr"/><path class="wn7dqvbng"/><path class="kq1mxjxmn"/></g>`,
		"fallback": "solar:paper-bin-broken",
	});
}

export default Component;
