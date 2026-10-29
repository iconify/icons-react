import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z8j12db-u.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z8j12db-u"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="jmo57ab0a wm-a"/></g>`,
		"fallback": "withicons:square-x-engrave",
	});
}

export default Component;
