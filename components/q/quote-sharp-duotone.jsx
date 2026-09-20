import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvs-ki8ao.css';
import '../../css/f/fiv8-my1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pvs-ki8ao"/><path class="fiv8-my1s"/></g>`,
		"fallback": "keyline-icons:quote-sharp-duotone",
	});
}

export default Component;
