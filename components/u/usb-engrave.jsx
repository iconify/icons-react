import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g4rq9cb4b.css';
import '../../css/h/hiqgl-xto.css';
import '../../css/i/ialz71b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g4rq9cb4b"/><path class="hiqgl-xto wm-shadow"/><path class="ialz71b-c"/></g>`,
		"fallback": "withicons:usb-engrave",
	});
}

export default Component;
