import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wf1qzqceu.css';
import '../../css/q/qu119kboz.css';
import '../../css/j/jvqy27bgy.css';
import '../../css/f/f8c5uldmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wf1qzqceu wm-shadow"/><path class="qu119kboz wm-shadow"/><path class="jvqy27bgy"/><path class="f8c5uldmr"/></g>`,
		"fallback": "withicons-brutal:paint-roller",
	});
}

export default Component;
