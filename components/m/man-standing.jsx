import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tq1gk_b-s.css';
import '../../css/j/jr7h29bob.css';
import '../../css/f/fcibvyp4k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tq1gk_b-s"/><path class="jr7h29bob"/><path class="fcibvyp4k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-standing",
	});
}

export default Component;
