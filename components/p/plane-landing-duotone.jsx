import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rwfoqachv.css';
import '../../css/u/u3_8ebqsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rwfoqachv secondary"/><path class="primary u3_8ebqsy"/></g>`,
		"fallback": "iconaut:plane-landing-duotone",
	});
}

export default Component;
