import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_uan37dn.css';
import '../../css/f/ful3fmdky.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p_uan37dn"/><path class="ful3fmdky"/></g>`,
		"fallback": "fluent-emoji-high-contrast:petri-dish",
	});
}

export default Component;
