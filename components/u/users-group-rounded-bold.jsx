import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uo3e6gbze.css';
import '../../css/i/i0b8n-y7j.css';
import '../../css/h/hl78y5ebu.css';
import '../../css/s/srjd9cjvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uo3e6gbze"/><path class="i0b8n-y7j"/><path class="hl78y5ebu"/><path class="srjd9cjvi"/></g>`,
		"fallback": "solar:users-group-rounded-bold",
	});
}

export default Component;
