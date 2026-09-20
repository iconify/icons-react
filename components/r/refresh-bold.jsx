import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xr_i1pq2c.css';
import '../../css/u/uaxroxb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xr_i1pq2c"/><path class="uaxroxb8b"/></g>`,
		"fallback": "solar:refresh-bold",
	});
}

export default Component;
