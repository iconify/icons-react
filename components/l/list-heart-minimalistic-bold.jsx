import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auv9jfbit.css';
import '../../css/t/t5528yb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="auv9jfbit"/><path class="t5528yb8d"/></g>`,
		"fallback": "solar:list-heart-minimalistic-bold",
	});
}

export default Component;
