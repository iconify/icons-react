import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2te35bqu.css';
import '../../css/u/uzwweqb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w2te35bqu"/><path class="uzwweqb2d"/></g>`,
		"fallback": "pixelarticons:wallet",
	});
}

export default Component;
