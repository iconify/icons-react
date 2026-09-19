import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jmvi93buy.css';
import '../../css/x/xmiyk6bxs.css';
import '../../css/m/mdu67ccke.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jmvi93buy"/><path class="xmiyk6bxs"/><path class="mdu67ccke"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-gesturing-ok",
	});
}

export default Component;
