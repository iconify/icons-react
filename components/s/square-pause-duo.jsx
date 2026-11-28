import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifjhrvbty.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk2gmgbqk.css';
import '../../css/w/wpsrqcnym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifjhrvbty secondary"/><g class="dt0cm9dhy primary"><path class="lk2gmgbqk"/><path class="wpsrqcnym"/></g>`,
		"fallback": "iconaut:square-pause-duo",
	});
}

export default Component;
