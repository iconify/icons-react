import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icjnv1trb.css';
import '../../css/c/cpq3f61ng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="icjnv1trb"/><path clip-rule="evenodd" class="cpq3f61ng"/></g>`,
		"fallback": "gg:smartphone",
	});
}

export default Component;
