import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/peiup12sr.css';
import '../../css/j/jvkmt5bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="peiup12sr"/><path class="jvkmt5bkh"/></g>`,
		"fallback": "reicon:slash-filled",
	});
}

export default Component;
