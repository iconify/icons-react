import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mcjvr8b5u.css';
import '../../css/q/ql2ohgbvi.css';
import '../../css/g/geku89n_n.css';
import '../../css/r/r8c3ad2kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mcjvr8b5u"/><path class="ql2ohgbvi wm-a"/><path class="geku89n_n wm-k"/><path class="r8c3ad2kx wm-a"/></g>`,
		"fallback": "withicons:plane-landing-sketch",
	});
}

export default Component;
