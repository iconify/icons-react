import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1w2vhb1y.css';
import '../../css/h/hibpeablc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z1w2vhb1y"/><path class="hibpeablc"/></g>`,
		"fallback": "reicon:magic-star-filled",
	});
}

export default Component;
