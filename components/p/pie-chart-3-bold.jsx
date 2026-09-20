import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy_h-qbtl.css';
import '../../css/m/md76cab6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qy_h-qbtl"/><path class="md76cab6e"/></g>`,
		"fallback": "solar:pie-chart-3-bold",
	});
}

export default Component;
