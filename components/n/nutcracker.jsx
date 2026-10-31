import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e-l6e3bbk.css';
import '../../css/s/s9ziy4b6m.css';
import '../../css/h/hyy516fqs.css';
import '../../css/u/up6muwb6o.css';
import '../../css/l/l6z8-8ban.css';
import '../../css/w/w5yp2j-6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e-l6e3bbk wm-shadow"/><path class="s9ziy4b6m"/><path class="hyy516fqs"/><path class="up6muwb6o"/><path class="l6z8-8ban"/><path class="w5yp2j-6q"/></g>`,
		"fallback": "withicons-retro:nutcracker",
	});
}

export default Component;
