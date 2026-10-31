import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqszr-vzb.css';
import '../../css/b/b0bbmvxny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqszr-vzb"/><path class="b0bbmvxny"/></g>`,
		"fallback": "coolicons:recycle-bulk-round",
	});
}

export default Component;
