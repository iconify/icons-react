import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry8o3pbhh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/natbz7biv.css';
import '../../css/e/e93f6r9ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry8o3pbhh secondary"/><g class="dt0cm9dhy primary"><path class="natbz7biv"/><path class="e93f6r9ct"/></g>`,
		"fallback": "iconaut:plane-takeoff-duo",
	});
}

export default Component;
