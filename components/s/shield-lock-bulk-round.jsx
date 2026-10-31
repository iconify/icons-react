import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnef9ckzr.css';
import '../../css/n/nl105mq_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lnef9ckzr"/><path class="nl105mq_f"/></g>`,
		"fallback": "coolicons:shield-lock-bulk-round",
	});
}

export default Component;
