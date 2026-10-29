import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dg5g5cnba.css';
import '../../css/p/p_yvxebuk.css';
import '../../css/b/bhq6bo-ou.css';
import '../../css/x/xm7lx-c5p.css';
import '../../css/q/qj_ikebkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dg5g5cnba wm-k"/><path class="p_yvxebuk wm-k"/><path class="bhq6bo-ou wm-k"/><path class="wm-k xm7lx-c5p"/><path class="qj_ikebkq wm-a"/></g>`,
		"fallback": "withicons:north-star-sketch",
	});
}

export default Component;
