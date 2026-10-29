import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ysscyjbrs.css';
import '../../css/t/tw0eg5bdb.css';
import '../../css/z/z0vjpzhlp.css';
import '../../css/v/vmqgeoi8e.css';
import '../../css/z/za5p8abfc.css';
import '../../css/s/s45eup48w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k ysscyjbrs"/><path class="tw0eg5bdb wm-a"/><path class="wm-s z0vjpzhlp"/><path class="vmqgeoi8e wm-k"/><path class="wm-a za5p8abfc"/><path class="s45eup48w wm-s"/></g>`,
		"fallback": "withicons:map-pin-off-sketch",
	});
}

export default Component;
