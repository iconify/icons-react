import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdietctib.css';
import '../../css/o/om-bzm87k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tdietctib"/><path class="om-bzm87k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:musical-notes",
	});
}

export default Component;
