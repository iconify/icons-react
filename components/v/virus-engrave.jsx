import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eldtd1r2s.css';
import '../../css/b/bmf49mbpn.css';
import '../../css/x/xnuytgkwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eldtd1r2s"/><path class="bmf49mbpn wm-shadow"/><path class="xnuytgkwb"/></g>`,
		"fallback": "withicons:virus-engrave",
	});
}

export default Component;
