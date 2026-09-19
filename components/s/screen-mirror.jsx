import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x3rkijpsp.css';
import '../../css/w/wzg831bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x3rkijpsp"/><path class="wzg831bbu"/></g>`,
		"fallback": "gg:screen-mirror",
	});
}

export default Component;
