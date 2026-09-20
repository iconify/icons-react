import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxrok6bhr.css';
import '../../css/u/ujmra2b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wxrok6bhr"/><path class="ujmra2b8o"/></g>`,
		"fallback": "reicon:pip2-duotone",
	});
}

export default Component;
