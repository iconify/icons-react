import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3f1iwbil.css';
import '../../css/x/xd7zhlbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r3f1iwbil"/><path class="xd7zhlbhl"/></g>`,
		"fallback": "nrk:square-and-arrow-up-expressive",
	});
}

export default Component;
