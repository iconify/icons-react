import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1qjjmbki.css';
import '../../css/u/uo2p8nbbc.css';
import '../../css/x/xisb9cb_u.css';
import '../../css/q/qhdghcc_z.css';
import '../../css/b/bn_jmt3pk.css';
import '../../css/v/vomqbubno.css';
import '../../css/u/u1pehq5jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1qjjmbki wm-k"/><path class="uo2p8nbbc wm-deco"/><path class="wm-k xisb9cb_u"/><path class="qhdghcc_z wm-k"/><path class="bn_jmt3pk wm-shadow"/><path class="vomqbubno wm-shine"/><path class="u1pehq5jp wm-shine"/></g>`,
		"fallback": "withicons-valentine:watch",
	});
}

export default Component;
