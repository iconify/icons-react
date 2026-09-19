import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/warkggbvp.css';
import '../../css/n/nc955vbly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="warkggbvp"/><path class="nc955vbly"/></g>`,
		"fallback": "healthicons:smoking-cessation2x-outline",
	});
}

export default Component;
