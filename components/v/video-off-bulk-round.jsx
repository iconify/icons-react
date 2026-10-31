import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7w_bdb2t.css';
import '../../css/p/popaz21gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k7w_bdb2t"/><path class="popaz21gp"/></g>`,
		"fallback": "coolicons:video-off-bulk-round",
	});
}

export default Component;
