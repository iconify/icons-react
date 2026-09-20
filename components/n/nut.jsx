import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/n/nj69sobsr.css';
import '../../css/o/oy8-2ebuw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4 3)" class="jtowsomii"><path class="nj69sobsr"/><circle class="oy8-2ebuw"/></g>`,
		"fallback": "system-uicons:nut",
	});
}

export default Component;
