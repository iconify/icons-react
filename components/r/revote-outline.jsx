import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/al52y3a2i.css';
import '../../css/y/ydfn0cuzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="al52y3a2i"/><path class="ydfn0cuzg"/></g>`,
		"fallback": "solar:revote-outline",
	});
}

export default Component;
