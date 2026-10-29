import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m8-4o3bpy.css';
import '../../css/r/r1uvmmr9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m8-4o3bpy"/><path class="r1uvmmr9d wm-a"/></g>`,
		"fallback": "withicons:reply-duo",
	});
}

export default Component;
