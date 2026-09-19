import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lpexxtbbb.css';
import '../../css/u/ul7_rhqdh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lpexxtbbb"/><path class="ul7_rhqdh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:skis",
	});
}

export default Component;
