import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dw4b06bfh.css';
import '../../css/u/upr1-up3r.css';
import '../../css/w/wfngal-vr.css';
import '../../css/n/na6b17oxm.css';
import '../../css/z/z8o327dsq.css';
import '../../css/c/cgrcrobbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dw4b06bfh wm-k"/><path class="upr1-up3r wm-a"/><path class="wfngal-vr wm-s"/><path class="na6b17oxm wm-k"/><path class="wm-a z8o327dsq"/><path class="cgrcrobbi wm-s"/></g>`,
		"fallback": "withicons:lion-head-sketch",
	});
}

export default Component;
