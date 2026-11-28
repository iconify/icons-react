import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhfyesugx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/i/izggtwq7w.css';
import '../../css/x/xhk4hxdes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xhfyesugx"/><g class="dt0cm9dhy primary"><path class="uuw1qkbsv"/><path class="izggtwq7w"/><path class="xhk4hxdes"/></g>`,
		"fallback": "iconaut:monitor-activity-duo",
	});
}

export default Component;
