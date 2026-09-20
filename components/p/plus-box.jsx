import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1n4saccw.css';
import '../../css/i/ix9pb0zya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1n4saccw"/><path class="ix9pb0zya"/></g>`,
		"fallback": "pixelarticons:plus-box",
	});
}

export default Component;
