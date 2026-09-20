import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rel_-cn-i.css';
import '../../css/w/wpbg5rb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rel_-cn-i"/><path class="wpbg5rb1i"/></g>`,
		"fallback": "pixelarticons:recycle",
	});
}

export default Component;
