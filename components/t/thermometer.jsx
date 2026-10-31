import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y819vj78e.css';
import '../../css/b/b7_0zn6ww.css';
import '../../css/o/o878e-b1y.css';
import '../../css/n/n5w_ncgkk.css';
import '../../css/d/dgmgfhiiv.css';
import '../../css/o/o-w665bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow y819vj78e"/><path class="b7_0zn6ww"/><path class="o878e-b1y"/><path class="n5w_ncgkk"/><path class="dgmgfhiiv"/><path class="o-w665bpq"/></g>`,
		"fallback": "withicons-retro:thermometer",
	});
}

export default Component;
