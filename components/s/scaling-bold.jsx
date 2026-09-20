import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ev1xo4b5t.css';
import '../../css/q/qgmw9qbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ev1xo4b5t"/><path class="qgmw9qbbl"/></g>`,
		"fallback": "solar:scaling-bold",
	});
}

export default Component;
