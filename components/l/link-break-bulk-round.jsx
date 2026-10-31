import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upuvm4uhm.css';
import '../../css/j/jo979gbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="upuvm4uhm"/><path class="jo979gbts"/></g>`,
		"fallback": "coolicons:link-break-bulk-round",
	});
}

export default Component;
