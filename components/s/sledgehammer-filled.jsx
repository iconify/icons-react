import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j9mdpwb9q.css';
import '../../css/m/mv941cbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j9mdpwb9q"/><path class="mv941cbeu"/></g>`,
		"fallback": "reicon:sledgehammer-filled",
	});
}

export default Component;
