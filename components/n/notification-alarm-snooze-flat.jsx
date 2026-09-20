import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxevm6bwc.css';
import '../../css/p/p5o67mbfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hxevm6bwc"/><path clip-rule="evenodd" class="p5o67mbfq"/></g>`,
		"fallback": "streamline-plump-color:notification-alarm-snooze-flat",
	});
}

export default Component;
