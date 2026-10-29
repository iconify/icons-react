import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m14e8zlyt.css';
import '../../css/c/c6tjo7bgx.css';
import '../../css/u/upi6evbrs.css';
import '../../css/m/mf6znbcws.css';
import '../../css/w/w3o0x094m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m14e8zlyt"/><path class="c6tjo7bgx wm-k"/><path class="upi6evbrs wm-a"/><path class="mf6znbcws wm-k"/><path class="w3o0x094m wm-a"/></g>`,
		"fallback": "withicons:refrigerator-sketch",
	});
}

export default Component;
