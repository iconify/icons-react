import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l5w8pibgw.css';
import '../../css/k/kn3v5rl7b.css';
import '../../css/h/hn6qrhojp.css';
import '../../css/d/di1d0ffeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l5w8pibgw"/><path class="kn3v5rl7b wm-k"/><path class="hn6qrhojp wm-k"/><path class="di1d0ffeq wm-a"/></g>`,
		"fallback": "withicons:mushroom-sketch",
	});
}

export default Component;
