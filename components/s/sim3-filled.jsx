import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rj9zdebxl.css';
import '../../css/n/nfiznsqth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rj9zdebxl"/><path clip-rule="evenodd" class="nfiznsqth"/></g>`,
		"fallback": "reicon:sim3-filled",
	});
}

export default Component;
