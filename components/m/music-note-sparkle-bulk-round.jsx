import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/olcahyb3y.css';
import '../../css/e/e1im8ybji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="olcahyb3y"/><path class="e1im8ybji"/></g>`,
		"fallback": "coolicons:music-note-sparkle-bulk-round",
	});
}

export default Component;
