import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j0b34b2wg.css';
import '../../css/u/ubvi1w8wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j0b34b2wg"/><path class="ubvi1w8wg"/></g>`,
		"fallback": "iconoir:mac-os-window",
	});
}

export default Component;
