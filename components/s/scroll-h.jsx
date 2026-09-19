import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/va3qq6b4s.css';
import '../../css/a/aed0glbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="va3qq6b4s"/><path clip-rule="evenodd" class="aed0glbja"/></g>`,
		"fallback": "gg:scroll-h",
	});
}

export default Component;
