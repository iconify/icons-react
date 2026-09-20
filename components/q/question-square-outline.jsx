import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jo1mwyf2n.css';
import '../../css/j/jwj5s6brs.css';
import '../../css/l/lle3kpb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jo1mwyf2n"/><path class="jwj5s6brs"/><path clip-rule="evenodd" class="lle3kpb1s"/></g>`,
		"fallback": "solar:question-square-outline",
	});
}

export default Component;
