import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5qcxeb9w.css';
import '../../css/u/u0mhcbifs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p5qcxeb9w"/><path class="u0mhcbifs"/></g>`,
		"fallback": "solar:link-round-angle-bold",
	});
}

export default Component;
