import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2c5tobtk.css';
import '../../css/n/nacd-ebdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u2c5tobtk"/><path class="nacd-ebdq"/></g>`,
		"fallback": "coolicons:loading-bulk-round",
	});
}

export default Component;
