import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujx_z-c1m.css';
import '../../css/m/mj3dvyfez.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujx_z-c1m"/><path class="mj3dvyfez"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-feeding-baby",
	});
}

export default Component;
