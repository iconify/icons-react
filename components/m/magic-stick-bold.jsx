import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1dfv4b9x.css';
import '../../css/x/x0069yi2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y1dfv4b9x"/><path class="x0069yi2l"/></g>`,
		"fallback": "solar:magic-stick-bold",
	});
}

export default Component;
