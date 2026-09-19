import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g5d36ybqm.css';
import '../../css/n/nm32_xbfm.css';
import '../../css/f/fcgvesbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="g5d36ybqm"/><path class="nm32_xbfm"/><path class="fcgvesbjd"/></g>`,
		"fallback": "hugeicons:table-round",
	});
}

export default Component;
