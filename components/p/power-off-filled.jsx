import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_w1fhb3p.css';
import '../../css/g/g1qut5krt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_w1fhb3p"/><path class="g1qut5krt"/></g>`,
		"fallback": "reicon:power-off-filled",
	});
}

export default Component;
