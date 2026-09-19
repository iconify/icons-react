import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2xbngpko.css';
import '../../css/o/ouj0mxufp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z2xbngpko"/><path class="ouj0mxufp"/></g>`,
		"fallback": "flowbite:magic-wand-solid",
	});
}

export default Component;
