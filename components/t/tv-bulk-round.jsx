import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfsnaacsu.css';
import '../../css/w/w5l7jjf3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rfsnaacsu"/><path class="w5l7jjf3a"/></g>`,
		"fallback": "coolicons:tv-bulk-round",
	});
}

export default Component;
