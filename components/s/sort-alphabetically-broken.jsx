import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i99jpsfam.css';
import '../../css/k/k_vfb7aeb.css';
import '../../css/h/hi5e58bpt.css';
import '../../css/u/u65-1ubal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i99jpsfam"/><path class="k_vfb7aeb"/><path class="hi5e58bpt"/><path class="u65-1ubal"/></g>`,
		"fallback": "solar:sort-alphabetically-broken",
	});
}

export default Component;
