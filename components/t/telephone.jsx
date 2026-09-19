import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efqu7pwvk.css';
import '../../css/q/q8xodibxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efqu7pwvk"/><path class="q8xodibxp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:telephone",
	});
}

export default Component;
