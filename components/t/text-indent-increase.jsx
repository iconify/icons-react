import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v0yato31m.css';
import '../../css/y/ydg5hu1yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v0yato31m"/><path class="ydg5hu1yp"/></g>`,
		"fallback": "proicons:text-indent-increase",
	});
}

export default Component;
