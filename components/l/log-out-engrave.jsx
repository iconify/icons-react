import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bsuu7tbrz.css';
import '../../css/q/qp2lgeb1b.css';
import '../../css/l/l_fy6mn2a.css';
import '../../css/y/y7q--ac_t.css';
import '../../css/t/te9ddab6d.css';
import '../../css/l/l-rfgwb-j.css';
import '../../css/k/kb7-p4vrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bsuu7tbrz wm-k"/><path class="qp2lgeb1b wm-a"/><path class="l_fy6mn2a wm-a"/><path class="wm-k y7q--ac_t"/><path class="te9ddab6d wm-shadow"/><path class="l-rfgwb-j wm-k"/><path class="kb7-p4vrd wm-a"/></g>`,
		"fallback": "withicons:log-out-engrave",
	});
}

export default Component;
