import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l72lb3bht.css';
import '../../css/f/fa92gabba.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l72lb3bht"/><path class="fa92gabba"/></g>`,
		"fallback": "fluent-emoji-high-contrast:vulcan-salute",
	});
}

export default Component;
