import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ippgambnh.css';
import '../../css/w/wpeb5qn-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ippgambnh"/><path class="wpeb5qn-n"/></g>`,
		"fallback": "hugeicons:neural-network",
	});
}

export default Component;
