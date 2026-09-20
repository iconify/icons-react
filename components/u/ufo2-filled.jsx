import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nl3l31ndq.css';
import '../../css/w/w2h4q5byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nl3l31ndq"/><path class="w2h4q5byc"/></g>`,
		"fallback": "reicon:ufo2-filled",
	});
}

export default Component;
