import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mpa2w_bcn.css';
import '../../css/x/xzhdfqg-r.css';
import '../../css/w/wl190dicw.css';
import '../../css/v/v_917cbym.css';
import '../../css/p/py8uhtbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mpa2w_bcn wm-k"/><path class="wm-a xzhdfqg-r"/><path class="wl190dicw wm-shadow"/><path class="v_917cbym wm-k"/><path class="py8uhtbvo wm-a"/></g>`,
		"fallback": "withicons:tooth-crown-engrave",
	});
}

export default Component;
