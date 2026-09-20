import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j7wfdpbwo.css';
import '../../css/f/fg9e45exk.css';
import '../../css/t/te0_fmbtj.css';
import '../../css/s/sbmsxlkla.css';
import '../../css/c/cgj19skhd.css';
import '../../css/e/ec3904xcj.css';
import '../../css/p/p1uehobqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j7wfdpbwo"/><path class="fg9e45exk"/><path class="te0_fmbtj"/><path class="sbmsxlkla"/><path class="cgj19skhd"/><path class="ec3904xcj"/><path class="p1uehobqi"/></g>`,
		"fallback": "solar:perfume-broken",
	});
}

export default Component;
