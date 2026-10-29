import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dx1ao6zbd.css';
import '../../css/x/xv_6uw7mb.css';
import '../../css/w/w5cfw-pwr.css';
import '../../css/f/fjk_47b8s.css';
import '../../css/z/zq1i1eb4q.css';
import '../../css/h/h2u2p5b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dx1ao6zbd wm-k"/><path class="wm-s xv_6uw7mb"/><path class="w5cfw-pwr wm-shadow"/><path class="fjk_47b8s wm-k"/><path class="wm-a zq1i1eb4q"/><path class="h2u2p5b7j wm-s"/></g>`,
		"fallback": "withicons:remote-control-engrave",
	});
}

export default Component;
