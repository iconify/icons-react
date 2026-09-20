import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p981e_i2q.css';
import '../../css/v/vkbhfiyrk.css';
import '../../css/t/twyt5qboj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p981e_i2q"/><path clip-rule="evenodd" class="vkbhfiyrk"/><path class="twyt5qboj"/></g>`,
		"fallback": "streamline-color:watch-circle-heartbeat-monitor-1-flat",
	});
}

export default Component;
