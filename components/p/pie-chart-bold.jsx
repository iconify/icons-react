import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ravi5i89y.css';
import '../../css/u/uobl5ma6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ravi5i89y"/><path class="uobl5ma6u"/></g>`,
		"fallback": "solar:pie-chart-bold",
	});
}

export default Component;
