import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rajfudbjw.css';
import '../../css/i/idyvs-ucc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rajfudbjw"/><path class="idyvs-ucc"/></g>`,
		"fallback": "coolicons:translate-bulk-round",
	});
}

export default Component;
