import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gs_fpnbes.css';
import '../../css/x/xmk_y3bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gs_fpnbes"/><path class="xmk_y3bcm"/></g>`,
		"fallback": "solar:ticket-outline",
	});
}

export default Component;
