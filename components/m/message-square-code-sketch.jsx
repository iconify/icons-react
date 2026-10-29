import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ez05224-i.css';
import '../../css/w/wciayxbdl.css';
import '../../css/l/llxyupbek.css';
import '../../css/f/fnr8gob4l.css';
import '../../css/n/nsiaxmbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ez05224-i"/><path class="wciayxbdl wm-k"/><path class="llxyupbek wm-a"/><path class="fnr8gob4l wm-k"/><path class="nsiaxmbcn wm-a"/></g>`,
		"fallback": "withicons:message-square-code-sketch",
	});
}

export default Component;
