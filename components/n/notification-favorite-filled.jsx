import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a7t0-2pev.css';
import '../../css/e/eo-t3gbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a7t0-2pev"/><path class="eo-t3gbql"/></g>`,
		"fallback": "reicon:notification-favorite-filled",
	});
}

export default Component;
