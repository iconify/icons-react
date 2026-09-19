import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a7e9w7vkk.css';
import '../../css/r/rhsnbmb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a7e9w7vkk"/><path clip-rule="evenodd" class="rhsnbmb6y"/></g>`,
		"fallback": "gg:pin-top",
	});
}

export default Component;
