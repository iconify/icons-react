import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f-xz292fb.css';
import '../../css/j/jusks7gbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f-xz292fb"/><path class="jusks7gbw"/></g>`,
		"fallback": "hugeicons:sperm",
	});
}

export default Component;
