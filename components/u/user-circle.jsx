import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vfblgthpy.css';
import '../../css/y/ybc_75b2x.css';
import '../../css/j/j24_fix6g.css';
import '../../css/j/j1ba9pq5z.css';
import '../../css/k/krrm7rbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vfblgthpy wm-shadow"/><path class="ybc_75b2x"/><path class="j24_fix6g"/><path class="j1ba9pq5z"/><path class="krrm7rbxh"/></g>`,
		"fallback": "withicons-retro:user-circle",
	});
}

export default Component;
