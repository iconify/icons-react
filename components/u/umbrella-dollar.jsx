import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trq020aoc.css';
import '../../css/i/in9uiwghv.css';
import '../../css/t/tfmz6fzjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="trq020aoc"/><path class="in9uiwghv"/><path class="tfmz6fzjb"/></g>`,
		"fallback": "hugeicons:umbrella-dollar",
	});
}

export default Component;
