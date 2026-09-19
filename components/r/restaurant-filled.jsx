import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_be9h43v.css';
import '../../css/u/us72j3bwj.css';
import '../../css/d/d-kiarazk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_be9h43v"/><path clip-rule="evenodd" class="us72j3bwj"/><path class="d-kiarazk"/></g>`,
		"fallback": "griddy-icons:restaurant-filled",
	});
}

export default Component;
