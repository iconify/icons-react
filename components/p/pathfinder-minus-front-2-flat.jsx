import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rm7n25ptt.css';
import '../../css/k/kaf0uddbr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rm7n25ptt"/><path class="kaf0uddbr"/></g>`,
		"fallback": "streamline-flex-color:pathfinder-minus-front-2-flat",
	});
}

export default Component;
