import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt_nkd3ul.css';
import '../../css/i/ie6eqgbeg.css';
import '../../css/j/jgfqngb4b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mt_nkd3ul"/><path class="ie6eqgbeg"/><path class="jgfqngb4b"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-in-tuxedo",
	});
}

export default Component;
