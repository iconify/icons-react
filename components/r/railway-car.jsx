import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wk284x_pt.css';
import '../../css/n/n83rf6bty.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wk284x_pt"/><path class="n83rf6bty"/></g>`,
		"fallback": "fluent-emoji-high-contrast:railway-car",
	});
}

export default Component;
