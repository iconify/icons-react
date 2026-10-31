import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4lizzbrg.css';
import '../../css/z/zppqoo85k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n4lizzbrg"/><path class="zppqoo85k"/></g>`,
		"fallback": "coolicons:mailbox-bulk-round",
	});
}

export default Component;
