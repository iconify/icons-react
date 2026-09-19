import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b91p3obex.css';
import '../../css/j/jv4_d7b6x.css';
import '../../css/t/t5w0scc5d.css';
import '../../css/k/k3pac-bjk.css';
import '../../css/m/mmspps2as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b91p3obex"/><path class="jv4_d7b6x"/><path class="t5w0scc5d"/><path class="k3pac-bjk"/><path class="mmspps2as"/></g>`,
		"fallback": "iconoir:shop-four-tiles-window",
	});
}

export default Component;
