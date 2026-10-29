import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yi23eea4c.css';
import '../../css/z/zs295v-ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yi23eea4c"/><path class="wm-a zs295v-ni"/></g>`,
		"fallback": "withicons:sun",
	});
}

export default Component;
