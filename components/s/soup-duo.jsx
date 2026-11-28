import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5-vkxbja.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k7p851c1o.css';
import '../../css/r/r3frkyh7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5-vkxbja secondary"/><g class="dt0cm9dhy primary"><path class="k7p851c1o"/><path class="r3frkyh7s"/></g>`,
		"fallback": "iconaut:soup-duo",
	});
}

export default Component;
