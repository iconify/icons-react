import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aa99-lkze.css';
import '../../css/b/bj-wvr-4t.css';
import '../../css/e/ee40hc7my.css';
import '../../css/p/p1_2zhbwk.css';
import '../../css/m/ms27smb1m.css';
import '../../css/i/ier0045zt.css';
import '../../css/q/qe9s2wb9y.css';
import '../../css/r/rluunnbuv.css';
import '../../css/a/a_k1w4bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aa99-lkze wm-k"/><path class="bj-wvr-4t wm-a"/><path class="ee40hc7my wm-s"/><path class="p1_2zhbwk wm-shadow"/><path class="ms27smb1m wm-k"/><path class="ier0045zt wm-a"/><path class="qe9s2wb9y wm-a"/><path class="rluunnbuv wm-s"/><path class="a_k1w4bwp wm-a"/></g>`,
		"fallback": "withicons:snowman-engrave",
	});
}

export default Component;
