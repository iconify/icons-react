import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p0zfw1uuh.css';
import '../../css/b/bx45vvbjs.css';
import '../../css/g/g9nc5pb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p0zfw1uuh"/><path class="bx45vvbjs"/><path class="g9nc5pb1m"/></g>`,
		"fallback": "iconaut:message-square-share",
	});
}

export default Component;
