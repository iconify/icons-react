import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w926o55vd.css';
import '../../css/u/uw8o1qbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w926o55vd"/><path class="uw8o1qbmj"/></g>`,
		"fallback": "hugeicons:view",
	});
}

export default Component;
