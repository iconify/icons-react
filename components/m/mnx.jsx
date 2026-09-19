import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/je_xtacvy.css';
import '../../css/l/lleh27b6p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="je_xtacvy"/><path class="lleh27b6p"/></g>`,
		"fallback": "cryptocurrency-color:mnx",
	});
}

export default Component;
