import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uyt_djohm.css';
import '../../css/f/fcxckcc5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uyt_djohm"/><path class="fcxckcc5s"/></g>`,
		"fallback": "hugeicons:layout-bottom",
	});
}

export default Component;
