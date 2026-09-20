import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/utvdb9vuc.css';
import '../../css/r/rcyub1bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="utvdb9vuc"/><path class="rcyub1bkc"/></g>`,
		"fallback": "solar:smart-speaker-minimalistic-broken",
	});
}

export default Component;
