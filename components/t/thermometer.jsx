import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lvud-5bxz.css';
import '../../css/j/j4rlsvbny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lvud-5bxz"/><path class="j4rlsvbny"/></g>`,
		"fallback": "fluent-emoji-high-contrast:thermometer",
	});
}

export default Component;
