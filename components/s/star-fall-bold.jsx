import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efp15db7p.css';
import '../../css/l/lakr3jbit.css';
import '../../css/j/j4qinhbwn.css';
import '../../css/d/d0ytvjb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efp15db7p"/><path class="lakr3jbit"/><path class="j4qinhbwn"/><path class="d0ytvjb8w"/></g>`,
		"fallback": "solar:star-fall-bold",
	});
}

export default Component;
