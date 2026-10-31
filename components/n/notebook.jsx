import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m4lswb51c.css';
import '../../css/s/s9psgfb2a.css';
import '../../css/x/xcnt8m2tq.css';
import '../../css/n/n3-ke9box.css';
import '../../css/y/y0llspbjc.css';
import '../../css/g/g6mlmib6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m4lswb51c wm-shadow"/><path class="s9psgfb2a"/><path class="xcnt8m2tq"/><path class="n3-ke9box"/><path class="y0llspbjc"/><path class="g6mlmib6y"/></g>`,
		"fallback": "withicons-retro:notebook",
	});
}

export default Component;
