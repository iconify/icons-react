import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3bh4bcov.css';
import '../../css/c/cabl52vgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w3bh4bcov"/><path class="cabl52vgw"/></g>`,
		"fallback": "pixelarticons:skull",
	});
}

export default Component;
