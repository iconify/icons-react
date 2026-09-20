import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryqpjkjck.css';
import '../../css/d/dilosfb6g.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/o/onba5u3qq.css';
import '../../css/r/rtexz8bxx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryqpjkjck"/><path class="dilosfb6g"/><g class="x8poo_bjf"><path class="onba5u3qq"/><path class="rtexz8bxx"/></g>`,
		"fallback": "openmoji:kiss-mark",
	});
}

export default Component;
