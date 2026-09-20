import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iby7u_b0v.css';
import '../../css/r/re4qu30mx.css';
import '../../css/e/e01soicac.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iby7u_b0v"/><path clip-rule="evenodd" class="re4qu30mx"/><path class="e01soicac"/></g>`,
		"fallback": "nrk:multiplier-0-8",
	});
}

export default Component;
