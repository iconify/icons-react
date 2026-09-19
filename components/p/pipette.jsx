import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xula1wtqd.css';
import '../../css/f/f7s8op3su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xula1wtqd"/><path class="f7s8op3su"/></g>`,
		"fallback": "hugeicons:pipette",
	});
}

export default Component;
