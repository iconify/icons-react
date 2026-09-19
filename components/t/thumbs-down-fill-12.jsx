import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glcp_kbvh.css';
import '../../css/v/vumopju_m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="glcp_kbvh"/><rect class="vumopju_m"/></g>`,
		"fallback": "garden:thumbs-down-fill-12",
	});
}

export default Component;
