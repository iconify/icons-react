import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wv6tcl1dc.css';
import '../../css/w/wkqmo0cvb.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/r/r3lmnjwdm.css';
import '../../css/x/xhe86mbvq.css';
import '../../css/d/dk9ab36fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wv6tcl1dc"/><path class="wkqmo0cvb"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num"/><path class="r3lmnjwdm"/><path class="xhe86mbvq"/><path class="dk9ab36fc wm-shine"/></g>`,
		"fallback": "withicons-kawaii:square",
	});
}

export default Component;
