import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eqr7ylb6b.css';
import '../../css/e/edc-2gbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eqr7ylb6b"/><path class="edc-2gbvx"/></g>`,
		"fallback": "solar:stars-bold",
	});
}

export default Component;
