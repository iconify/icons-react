import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lm9uvnbxx.css';
import '../../css/f/fdkc3ubmi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lm9uvnbxx"/><path class="fdkc3ubmi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:trackball",
	});
}

export default Component;
