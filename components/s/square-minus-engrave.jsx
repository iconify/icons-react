import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qj4t6k7ly.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/l/l0v-b4kbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qj4t6k7ly wm-k"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="l0v-b4kbr wm-a"/></g>`,
		"fallback": "withicons:square-minus-engrave",
	});
}

export default Component;
