import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rd-39lbau.css';
import '../../css/d/de_6hlhgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rd-39lbau"/><path clip-rule="evenodd" class="de_6hlhgc"/></g>`,
		"fallback": "griddy-icons:monkey",
	});
}

export default Component;
