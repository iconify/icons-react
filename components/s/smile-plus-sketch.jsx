import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kaxnrx-5v.css';
import '../../css/s/ssz1-_f6r.css';
import '../../css/l/li3spsbhq.css';
import '../../css/u/umgdc9blm.css';
import '../../css/u/u1_6cvbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kaxnrx-5v wm-k"/><path class="ssz1-_f6r wm-k"/><path class="li3spsbhq wm-a"/><path class="umgdc9blm wm-a"/><path class="u1_6cvbjv wm-s"/></g>`,
		"fallback": "withicons:smile-plus-sketch",
	});
}

export default Component;
