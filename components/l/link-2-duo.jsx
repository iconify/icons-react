import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ov_robb3s.css';
import '../../css/y/y875pzbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ov_robb3s"/><path class="wm-a y875pzbpu"/></g>`,
		"fallback": "withicons:link-2-duo",
	});
}

export default Component;
