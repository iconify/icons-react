import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vno5ecccu.css';
import '../../css/v/vbwnicc5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vno5ecccu"/><path class="vbwnicc5w"/></g>`,
		"fallback": "coolicons:scan-sparkle-bulk-round",
	});
}

export default Component;
