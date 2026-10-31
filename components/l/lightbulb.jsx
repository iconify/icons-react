import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rh8-o2bow.css';
import '../../css/i/ipxxc8bod.css';
import '../../css/p/px-flgb6o.css';
import '../../css/b/bs6dylbkx.css';
import '../../css/i/ip2t0sb4q.css';
import '../../css/u/ua4ftnb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rh8-o2bow wm-shadow"/><path class="ipxxc8bod"/><path class="px-flgb6o"/><path class="bs6dylbkx"/><path class="ip2t0sb4q"/><path class="ua4ftnb8z"/></g>`,
		"fallback": "withicons-retro:lightbulb",
	});
}

export default Component;
