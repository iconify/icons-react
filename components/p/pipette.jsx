import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dp9j5sjpd.css';
import '../../css/p/pbznkubfz.css';
import '../../css/f/f145c8c8n.css';
import '../../css/d/dtghwpbgr.css';
import '../../css/l/lkw0-gbhg.css';
import '../../css/i/ikz7brimr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dp9j5sjpd wm-shadow"/><path class="pbznkubfz"/><path class="f145c8c8n"/><path class="dtghwpbgr"/><path class="lkw0-gbhg"/><path class="ikz7brimr"/></g>`,
		"fallback": "withicons-retro:pipette",
	});
}

export default Component;
