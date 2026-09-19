import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hd6j5573u.css';
import '../../css/p/p6f_kjeby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hd6j5573u"/><path class="p6f_kjeby"/></g>`,
		"fallback": "hugeicons:map-pin-check-inside",
	});
}

export default Component;
