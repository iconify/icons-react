import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrvln_b7u.css';
import '../../css/i/i_rjeubsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qrvln_b7u"/><path class="i_rjeubsq"/></g>`,
		"fallback": "coolicons:standing-desk-bulk-round",
	});
}

export default Component;
