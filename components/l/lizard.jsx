import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iv2nlwmrl.css';
import '../../css/j/jo60q4_5a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iv2nlwmrl"/><path class="jo60q4_5a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:lizard",
	});
}

export default Component;
