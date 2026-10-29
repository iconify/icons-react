import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ee_t7pb7v.css';
import '../../css/t/t6njcbc0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ee_t7pb7v"/><path class="t6njcbc0d wm-a"/></g>`,
		"fallback": "withicons:message-square-x",
	});
}

export default Component;
