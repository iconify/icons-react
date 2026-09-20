import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lfpfczh4t.css';
import '../../css/z/zl3fw2elx.css';
import '../../css/z/zxyk9lbns.css';
import '../../css/d/dt2s63bon.css';
import '../../css/l/ljiiezm4y.css';
import '../../css/g/gs9bj9biz.css';
import '../../css/t/t-j_eedxl.css';
import '../../css/g/gof8c6bpn.css';
import '../../css/w/wabawjsdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lfpfczh4t"/><path class="zl3fw2elx"/><path class="zxyk9lbns"/><path class="dt2s63bon"/><path class="ljiiezm4y"/><path class="gs9bj9biz"/><path class="t-j_eedxl"/><path class="gof8c6bpn"/><path class="wabawjsdm"/></g>`,
		"fallback": "solar:table-columns-split-broken",
	});
}

export default Component;
