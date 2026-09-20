import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i__g5qb9y.css';
import '../../css/d/dgmnhqb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i__g5qb9y"/><path class="dgmnhqb1q"/></g>`,
		"fallback": "keyline-icons:thermometer-sun-sharp-fill",
	});
}

export default Component;
