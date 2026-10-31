import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/m/m50kypmqg.css';
import '../../css/x/x_0w6qb_r.css';
import '../../css/p/p4nqbnb9s.css';
import '../../css/c/cp-ektmmr.css';
import '../../css/n/nwf5fm3xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="m50kypmqg"/><path class="x_0w6qb_r"/><path class="p4nqbnb9s"/><path class="cp-ektmmr"/><path class="nwf5fm3xu"/></g>`,
		"fallback": "withicons-retro:message-square-warning",
	});
}

export default Component;
