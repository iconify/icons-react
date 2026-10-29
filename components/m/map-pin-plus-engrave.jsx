import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/soxtk8b-h.css';
import '../../css/t/toaaljiww.css';
import '../../css/v/v2ukonb-w.css';
import '../../css/n/nl0gnobci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="soxtk8b-h wm-k"/><path class="toaaljiww wm-shadow"/><path class="v2ukonb-w wm-k"/><path class="nl0gnobci wm-s"/></g>`,
		"fallback": "withicons:map-pin-plus-engrave",
	});
}

export default Component;
