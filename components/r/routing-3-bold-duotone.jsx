import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e2ra9zmqo.css';
import '../../css/f/fedou6bod.css';
import '../../css/u/u8sdsbbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="e2ra9zmqo"/><path class="fedou6bod"/></g><path clip-rule="evenodd" class="u8sdsbbhy"/></g>`,
		"fallback": "solar:routing-3-bold-duotone",
	});
}

export default Component;
