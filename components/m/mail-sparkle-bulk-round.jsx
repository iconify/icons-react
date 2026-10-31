import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9ovb6fnr.css';
import '../../css/o/oxuzbeb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b9ovb6fnr"/><path class="oxuzbeb8a"/></g>`,
		"fallback": "coolicons:mail-sparkle-bulk-round",
	});
}

export default Component;
