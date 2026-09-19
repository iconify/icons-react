import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4ley4cku.css';
import '../../css/g/g811kvqhw.css';
import '../../css/i/ihsj1ieax.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q4ley4cku"/><path class="g811kvqhw"/><path class="ihsj1ieax"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-in-tuxedo",
	});
}

export default Component;
