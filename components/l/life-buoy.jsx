import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/y/yi23eea4c.css';
import '../../css/j/j13_cqbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yw4fz_b6b"/><path class="yi23eea4c"/><path class="j13_cqbrn wm-a"/></g>`,
		"fallback": "withicons:life-buoy",
	});
}

export default Component;
