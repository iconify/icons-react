import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/whqx1yb0n.css';
import '../../css/s/st_6fbb3m.css';
import '../../css/v/v0t0eobhb.css';
import '../../css/l/l83b_bbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="whqx1yb0n wm-shadow"/><path class="st_6fbb3m"/><path class="v0t0eobhb"/><path class="l83b_bbgl"/></g>`,
		"fallback": "withicons-retro:pilcrow",
	});
}

export default Component;
