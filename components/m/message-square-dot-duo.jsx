import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tzfhybccw.css';
import '../../css/v/v5l32abxa.css';
import '../../css/x/x0w6nibqk.css';
import '../../css/y/y5dvwo25s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tzfhybccw"/><path class="v5l32abxa wm-s"/><path class="wm-s x0w6nibqk"/><path class="y5dvwo25s"/></g>`,
		"fallback": "withicons:message-square-dot-duo",
	});
}

export default Component;
