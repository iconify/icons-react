import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mdoim3brn.css';
import '../../css/j/jrf-bccmn.css';
import '../../css/b/bpaqc2ohf.css';
import '../../css/t/t23h3n3fw.css';
import '../../css/w/ww__7yboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mdoim3brn"/><path class="jrf-bccmn wm-k"/><path class="bpaqc2ohf wm-a"/><path class="t23h3n3fw wm-k"/><path class="wm-a ww__7yboz"/></g>`,
		"fallback": "withicons:toilet-sketch",
	});
}

export default Component;
