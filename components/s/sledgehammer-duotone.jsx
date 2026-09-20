import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj1a-hwix.css';
import '../../css/g/gc7-tsbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nj1a-hwix"/><path class="gc7-tsbiv"/></g>`,
		"fallback": "reicon:sledgehammer-duotone",
	});
}

export default Component;
