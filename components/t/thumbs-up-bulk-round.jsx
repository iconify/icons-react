import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yqazu98pt.css';
import '../../css/l/lwj2ly6-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yqazu98pt"/><path class="lwj2ly6-e"/></g>`,
		"fallback": "coolicons:thumbs-up-bulk-round",
	});
}

export default Component;
