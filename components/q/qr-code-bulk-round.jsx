import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psve2dmma.css';
import '../../css/c/cw4fcrwag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="psve2dmma"/><path class="cw4fcrwag"/></g>`,
		"fallback": "coolicons:qr-code-bulk-round",
	});
}

export default Component;
