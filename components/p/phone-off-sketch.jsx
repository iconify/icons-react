import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p9fzehbgl.css';
import '../../css/s/sssx3w21g.css';
import '../../css/d/d-jm_9bof.css';
import '../../css/i/isp22yuws.css';
import '../../css/w/wtypv6bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p9fzehbgl"/><path class="sssx3w21g wm-k"/><path class="d-jm_9bof wm-k"/><path class="isp22yuws wm-s"/><path class="wm-s wtypv6bbe"/></g>`,
		"fallback": "withicons:phone-off-sketch",
	});
}

export default Component;
