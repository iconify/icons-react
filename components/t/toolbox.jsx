import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgqvnmb0z.css';
import '../../css/h/hfxy40bwm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bgqvnmb0z"/><path class="hfxy40bwm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:toolbox",
	});
}

export default Component;
