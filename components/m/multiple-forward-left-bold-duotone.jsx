import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1chxfoio.css';
import '../../css/g/g_s5jrg7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j1chxfoio"/><path clip-rule="evenodd" class="g_s5jrg7l"/></g>`,
		"fallback": "solar:multiple-forward-left-bold-duotone",
	});
}

export default Component;
