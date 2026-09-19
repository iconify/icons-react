import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/due5z-b_y.css';
import '../../css/r/rtx3wobtp.css';
import '../../css/l/l2jm3fv6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="due5z-b_y"/><path class="rtx3wobtp"/><path class="l2jm3fv6a"/></g>`,
		"fallback": "hugeicons:presentation-podium",
	});
}

export default Component;
