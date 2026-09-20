import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-2xhh-6s.css';
import '../../css/f/f31k6gdej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n-2xhh-6s"/><path clip-rule="evenodd" class="f31k6gdej"/></g>`,
		"fallback": "reicon:list-heart-filled",
	});
}

export default Component;
