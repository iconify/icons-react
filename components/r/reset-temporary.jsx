import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/w/w7y2_zn0h.css';
import '../../css/o/oeuerccbj.css';
import '../../css/o/olhj8txmz.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(0 1 1 0 2.5 2.5)" class="jtowsomii"><path class="w7y2_zn0h"/><circle class="oeuerccbj"/><path class="olhj8txmz"/></g>`,
		"fallback": "system-uicons:reset-temporary",
	});
}

export default Component;
