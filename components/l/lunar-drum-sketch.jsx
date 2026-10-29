import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hukkl55px.css';
import '../../css/w/w4o_mqs1s.css';
import '../../css/a/a4drb_btg.css';
import '../../css/q/qe7bs-blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hukkl55px wm-a"/><path class="w4o_mqs1s wm-k"/><path class="a4drb_btg wm-a"/><path class="qe7bs-blu wm-s"/></g>`,
		"fallback": "withicons:lunar-drum-sketch",
	});
}

export default Component;
