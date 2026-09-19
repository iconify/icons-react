import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdh6u__cw.css';
import '../../css/t/tg50px5cr.css';
import '../../css/n/np1ebrbfk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdh6u__cw"/><path class="tg50px5cr"/><path class="np1ebrbfk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-in-manual-wheelchair",
	});
}

export default Component;
