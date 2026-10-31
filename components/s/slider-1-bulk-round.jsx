import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ft036dbav.css';
import '../../css/y/yhz-zccdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ft036dbav"/><path class="yhz-zccdk"/></g>`,
		"fallback": "coolicons:slider-1-bulk-round",
	});
}

export default Component;
