import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y51z3iz3m.css';
import '../../css/i/ioq3g7b0x.css';
import '../../css/o/oqx77ybwi.css';
import '../../css/y/yd5k-hbzc.css';
import '../../css/h/hm1lzmgnv.css';
import '../../css/v/v2jkl0frg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k y51z3iz3m"/><path class="ioq3g7b0x wm-shadow"/><path class="oqx77ybwi wm-k"/><path class="wm-a yd5k-hbzc"/><path class="hm1lzmgnv wm-s"/><path class="v2jkl0frg wm-k"/></g>`,
		"fallback": "withicons:oven-engrave",
	});
}

export default Component;
