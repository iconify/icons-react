import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yclg9sngj.css';
import '../../css/h/hd13aibxg.css';
import '../../css/v/vamzte2iy.css';
import '../../css/f/fg9e45exk.css';
import '../../css/l/ls75-bcir.css';
import '../../css/m/mp2x67bgj.css';
import '../../css/e/ec3904xcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yclg9sngj"/><path class="hd13aibxg"/><path class="vamzte2iy"/><path class="fg9e45exk"/><path class="ls75-bcir"/><path class="mp2x67bgj"/><path class="ec3904xcj"/></g>`,
		"fallback": "solar:perfume-line-duotone",
	});
}

export default Component;
