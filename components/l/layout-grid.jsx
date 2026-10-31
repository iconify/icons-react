import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vk5-v2mcz.css';
import '../../css/y/yotmohbra.css';
import '../../css/n/nq38fhacn.css';
import '../../css/d/dmc8hyxgf.css';
import '../../css/p/p2tcxnblo.css';
import '../../css/y/yhp3xdbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vk5-v2mcz wm-shadow"/><path class="wm-shadow yotmohbra"/><path class="nq38fhacn"/><path class="dmc8hyxgf"/><path class="p2tcxnblo"/><path class="yhp3xdbbe"/></g>`,
		"fallback": "withicons-brutal:layout-grid",
	});
}

export default Component;
