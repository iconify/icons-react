import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yw5jbxv0x.css';
import '../../css/s/s0gi_fbkr.css';
import '../../css/z/zw25_fouw.css';
import '../../css/n/nu58gbc_b.css';
import '../../css/i/ik5228bhp.css';
import '../../css/s/sf98dabxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yw5jbxv0x"/><path class="s0gi_fbkr"/><path class="zw25_fouw"/><path class="nu58gbc_b"/><path class="ik5228bhp"/><path class="sf98dabxa"/></g>`,
		"fallback": "withicons-retro:panel-right",
	});
}

export default Component;
