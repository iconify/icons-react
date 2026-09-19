import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_1clgbfk.css';
import '../../css/s/syx-pkbxy.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u_1clgbfk"/><path class="syx-pkbxy"/><path class="uru88vgdy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:om",
	});
}

export default Component;
