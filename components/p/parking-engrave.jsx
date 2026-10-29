import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lrqqd-k7n.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/m/m6ku3cbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lrqqd-k7n wm-k"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="m6ku3cbcx wm-a"/></g>`,
		"fallback": "withicons:parking-engrave",
	});
}

export default Component;
