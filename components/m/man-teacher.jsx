import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f0xzn9s8p.css';
import '../../css/l/lwa595gfu.css';
import '../../css/s/sbp9wqb1w.css';
import '../../css/f/ftqvo73xc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f0xzn9s8p"/><path class="lwa595gfu"/><path class="sbp9wqb1w"/><path clip-rule="evenodd" class="ftqvo73xc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-teacher",
	});
}

export default Component;
