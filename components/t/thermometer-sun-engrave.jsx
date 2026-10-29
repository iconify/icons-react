import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/upnq-vb_x.css';
import '../../css/r/rq86edb2v.css';
import '../../css/u/u4r_7hozg.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/t/thjectbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="upnq-vb_x wm-k"/><path class="rq86edb2v wm-a"/><path class="u4r_7hozg wm-shadow"/><path class="ipkd9vbgw wm-k"/><path class="thjectbkq wm-a"/></g>`,
		"fallback": "withicons:thermometer-sun-engrave",
	});
}

export default Component;
