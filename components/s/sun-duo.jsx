import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ll9crmb_e.css';
import '../../css/z/zs295v-ni.css';
import '../../css/y/yi23eea4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ll9crmb_e"/><path class="wm-a zs295v-ni"/><path class="yi23eea4c"/></g>`,
		"fallback": "withicons:sun-duo",
	});
}

export default Component;
