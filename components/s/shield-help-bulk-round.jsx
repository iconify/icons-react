import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnef9ckzr.css';
import '../../css/p/pb6848bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lnef9ckzr"/><path class="pb6848bsx"/></g>`,
		"fallback": "coolicons:shield-help-bulk-round",
	});
}

export default Component;
