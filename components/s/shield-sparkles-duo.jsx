import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad7le-5la.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/y/yhc39k2dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad7le-5la secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="yhc39k2dy"/></g>`,
		"fallback": "iconaut:shield-sparkles-duo",
	});
}

export default Component;
