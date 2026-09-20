import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7yxgulse.css';
import '../../css/v/vq3ubub7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q7yxgulse"/><path clip-rule="evenodd" class="vq3ubub7x"/></g>`,
		"fallback": "nrk:person",
	});
}

export default Component;
