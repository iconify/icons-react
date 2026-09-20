import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rzzy5jjev.css';
import '../../css/b/big4d8t5q.css';
import '../../css/d/dv6lf562e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rzzy5jjev"/><path class="big4d8t5q"/><path class="dv6lf562e"/></g>`,
		"fallback": "solar:volleyball-2-bold",
	});
}

export default Component;
