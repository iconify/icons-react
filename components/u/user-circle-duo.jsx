import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mt96jhb4p.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/y/yd398tbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mt96jhb4p"/><path class="yw4fz_b6b"/><path class="yd398tbty"/></g>`,
		"fallback": "withicons:user-circle-duo",
	});
}

export default Component;
