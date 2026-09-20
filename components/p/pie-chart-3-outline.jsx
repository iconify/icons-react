import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jfjw6dbtw.css';
import '../../css/p/p0x_kydxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jfjw6dbtw"/><path class="p0x_kydxc"/></g>`,
		"fallback": "solar:pie-chart-3-outline",
	});
}

export default Component;
