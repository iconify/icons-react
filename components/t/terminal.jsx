import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/p/pi0hf7bmt.css';
import '../../css/y/y-y0r6qxv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="pi0hf7bmt"/><path class="y-y0r6qxv"/></g>`,
		"fallback": "system-uicons:terminal",
	});
}

export default Component;
