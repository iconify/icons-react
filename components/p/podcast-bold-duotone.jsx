import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucjozibeh.css';
import '../../css/b/bt6j9wbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ucjozibeh"/><path class="bt6j9wbeq"/></g>`,
		"fallback": "solar:podcast-bold-duotone",
	});
}

export default Component;
