import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lp3-8fc3a.css';
import '../../css/m/mxhkoj7bt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lp3-8fc3a"/><path class="mxhkoj7bt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:raccoon",
	});
}

export default Component;
