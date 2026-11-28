import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0-y98y0y.css';
import '../../css/n/n3gu9ibnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0-y98y0y secondary"/><path class="n3gu9ibnn primary"/></g>`,
		"fallback": "iconaut:music-duotone",
	});
}

export default Component;
