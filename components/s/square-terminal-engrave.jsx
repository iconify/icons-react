import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vdp4x11qu.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/j/jmmoaxpqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vdp4x11qu wm-k"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="jmmoaxpqw wm-a"/></g>`,
		"fallback": "withicons:square-terminal-engrave",
	});
}

export default Component;
