import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ee_t7pb7v.css';
import '../../css/m/md4tcwb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ee_t7pb7v"/><path class="md4tcwb_p wm-a"/></g>`,
		"fallback": "withicons:message-square-text",
	});
}

export default Component;
