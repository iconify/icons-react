import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmydvh15t.css';
import '../../css/r/ryuf2s0ha.css';
import '../../css/f/f1sfugbyq.css';
import '../../css/n/n5n99gb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmydvh15t"/><path class="ryuf2s0ha"/><path class="f1sfugbyq"/><path class="n5n99gb6t"/></g>`,
		"fallback": "streamline-ultimate-color:rss-feed",
	});
}

export default Component;
