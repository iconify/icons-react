import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zo3r5sxxk.css';
import '../../css/m/mn3u620zx.css';
import '../../css/x/xd8yd0bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zo3r5sxxk"/><path class="mn3u620zx"/><path class="xd8yd0bhm"/></g>`,
		"fallback": "iconaut:monitor-dot",
	});
}

export default Component;
