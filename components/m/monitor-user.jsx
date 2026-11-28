import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/i/izggtwq7w.css';
import '../../css/s/sxr14vmgm.css';
import '../../css/n/n6d6eun0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uuw1qkbsv"/><path class="izggtwq7w"/><path class="sxr14vmgm"/><path class="n6d6eun0b"/></g>`,
		"fallback": "iconaut:monitor-user",
	});
}

export default Component;
