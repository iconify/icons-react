import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l_a4_cb1n.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l_a4_cb1n wm-k"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/></g>`,
		"fallback": "withicons:square-engrave",
	});
}

export default Component;
