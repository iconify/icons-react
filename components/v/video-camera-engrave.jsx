import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pnl3qq6dw.css';
import '../../css/h/h-88fv_ot.css';
import '../../css/l/liwxtwofv.css';
import '../../css/z/za3dt0bho.css';
import '../../css/r/rcb7clbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pnl3qq6dw wm-k"/><path class="h-88fv_ot wm-a"/><path class="liwxtwofv wm-shadow"/><path class="wm-k za3dt0bho"/><path class="rcb7clbki wm-a"/></g>`,
		"fallback": "withicons:video-camera-engrave",
	});
}

export default Component;
