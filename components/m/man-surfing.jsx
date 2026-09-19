import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c9_nnybaf.css';
import '../../css/f/f1ukll13h.css';
import '../../css/b/bpiftrb4i.css';
import '../../css/e/eoer0xs2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c9_nnybaf"/><path class="f1ukll13h"/><path class="bpiftrb4i"/><path class="eoer0xs2e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-surfing",
	});
}

export default Component;
