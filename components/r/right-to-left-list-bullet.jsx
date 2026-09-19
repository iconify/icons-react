import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fe547d_ye.css';
import '../../css/u/upqim93zu.css';
import '../../css/g/gczf1zbun.css';
import '../../css/h/hvvoj_b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fe547d_ye"/><path class="upqim93zu"/><path class="gczf1zbun"/><path class="hvvoj_b-q"/></g>`,
		"fallback": "hugeicons:right-to-left-list-bullet",
	});
}

export default Component;
