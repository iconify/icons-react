import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0bcih7_a.css';
import '../../css/j/jqufdacaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s0bcih7_a"/><path clip-rule="evenodd" class="jqufdacaf"/></g>`,
		"fallback": "solar:sticker-smile-circle-bold",
	});
}

export default Component;
