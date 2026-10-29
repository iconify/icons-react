import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iyrqk-7tp.css';
import '../../css/q/q-j_s-bsp.css';
import '../../css/v/vh4_jvb7b.css';
import '../../css/j/jofkexr8t.css';
import '../../css/y/y4nh-g7yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="iyrqk-7tp wm-k"/><path class="q-j_s-bsp wm-shadow"/><path class="vh4_jvb7b wm-k"/><path class="jofkexr8t wm-k"/><path class="wm-a y4nh-g7yf"/></g>`,
		"fallback": "withicons:mehndi-hand-engrave",
	});
}

export default Component;
