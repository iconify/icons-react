import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n6daalb-j.css';
import '../../css/q/qu4x13nbg.css';
import '../../css/v/vkba6k5jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n6daalb-j"/><path class="qu4x13nbg"/><path class="vkba6k5jk"/></g>`,
		"fallback": "solar:parentheses-broken",
	});
}

export default Component;
