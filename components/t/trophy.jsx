import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i59-8zbak.css';
import '../../css/u/uz85sjvru.css';
import '../../css/a/a6vtm2nyb.css';
import '../../css/m/memn3xbdy.css';
import '../../css/c/c4zkbo2em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i59-8zbak"/><path class="uz85sjvru"/><path class="a6vtm2nyb"/><path class="memn3xbdy"/><path class="c4zkbo2em"/></g>`,
		"fallback": "iconaut:trophy",
	});
}

export default Component;
