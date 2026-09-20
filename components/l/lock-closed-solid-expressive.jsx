import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wr3bdgohw.css';
import '../../css/f/fxibuwb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wr3bdgohw"/><path class="fxibuwb5m"/></g>`,
		"fallback": "nrk:lock-closed-solid-expressive",
	});
}

export default Component;
