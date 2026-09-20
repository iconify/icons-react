import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7swlumbk.css';
import '../../css/k/kvpvyyzaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o7swlumbk"/><path class="kvpvyyzaa"/></g>`,
		"fallback": "reicon:user-id-duotone",
	});
}

export default Component;
