import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ipbs2sbgw.css';
import '../../css/j/jewombbbr.css';
import '../../css/w/w6gy9zb0t.css';
import '../../css/x/xpofho1qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ipbs2sbgw"/><path class="jewombbbr"/><path class="w6gy9zb0t"/><path class="xpofho1qb"/></g>`,
		"fallback": "iconaut:toaster",
	});
}

export default Component;
