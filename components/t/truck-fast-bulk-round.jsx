import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8n8oqh6r.css';
import '../../css/e/e80gc3tog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8n8oqh6r"/><path class="e80gc3tog"/></g>`,
		"fallback": "coolicons:truck-fast-bulk-round",
	});
}

export default Component;
