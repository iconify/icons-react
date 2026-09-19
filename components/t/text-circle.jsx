import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fa2ubcbix.css';
import '../../css/d/dawcsab1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fa2ubcbix"/><path class="dawcsab1j"/></g>`,
		"fallback": "hugeicons:text-circle",
	});
}

export default Component;
