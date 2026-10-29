import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mejzk5lgr.css';
import '../../css/r/ropvj0mrx.css';
import '../../css/h/h3koi8h_e.css';
import '../../css/i/iyajw1yez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mejzk5lgr wm-k"/><path class="ropvj0mrx wm-k"/><path class="h3koi8h_e wm-a"/><circle class="iyajw1yez wm-s"/></g>`,
		"fallback": "withicons:paper-fan-sketch",
	});
}

export default Component;
