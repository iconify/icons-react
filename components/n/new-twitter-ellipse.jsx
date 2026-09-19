import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ik8cggbda.css';
import '../../css/w/websu8mzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ik8cggbda"/><path class="websu8mzr"/></g>`,
		"fallback": "hugeicons:new-twitter-ellipse",
	});
}

export default Component;
