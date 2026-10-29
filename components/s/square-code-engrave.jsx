import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b_z8xccsx.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/y/y2x2kobfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b_z8xccsx wm-k"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="wm-a y2x2kobfm"/></g>`,
		"fallback": "withicons:square-code-engrave",
	});
}

export default Component;
