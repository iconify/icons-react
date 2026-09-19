import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jw1qig9gb.css';
import '../../css/n/nkw9a7apg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jw1qig9gb"/><path class="nkw9a7apg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:rice-ball",
	});
}

export default Component;
