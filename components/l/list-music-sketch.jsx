import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e92aedcqx.css';
import '../../css/x/xe2megdde.css';
import '../../css/u/ue6wgg4iq.css';
import '../../css/u/uuu5t1bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e92aedcqx wm-k"/><path class="wm-a xe2megdde"/><path class="ue6wgg4iq wm-k"/><path class="uuu5t1bgf wm-a"/></g>`,
		"fallback": "withicons:list-music-sketch",
	});
}

export default Component;
