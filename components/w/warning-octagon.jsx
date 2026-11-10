import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pa9vfdc1u.css';
import '../../css/x/x6fgtsb9s.css';
import '../../css/x/x8iphublh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pa9vfdc1u"/><path class="x6fgtsb9s"/><path class="x8iphublh"/></g>`,
		"fallback": "andrsrxn:warning-octagon",
	});
}

export default Component;
