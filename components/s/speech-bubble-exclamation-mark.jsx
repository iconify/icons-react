import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzrm6lxc.css';
import '../../css/a/anh0zhbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hjzrm6lxc"/><path class="anh0zhbfj"/></g>`,
		"fallback": "nrk:speech-bubble-exclamation-mark",
	});
}

export default Component;
