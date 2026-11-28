import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg_aqibxi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/v/vrq2tu6vd.css';
import '../../css/c/c29jx0u_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sg_aqibxi"/><g class="dt0cm9dhy primary"><path class="dp12a2bii"/><path class="vrq2tu6vd"/><path class="c29jx0u_f"/></g>`,
		"fallback": "iconaut:message-square-lock-duo",
	});
}

export default Component;
