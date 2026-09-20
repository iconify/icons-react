import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdea7tbyg.css';
import '../../css/q/qhulccbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xdea7tbyg"/><path clip-rule="evenodd" class="qhulccbag"/></g>`,
		"fallback": "nrk:tv-dot-expressive",
	});
}

export default Component;
