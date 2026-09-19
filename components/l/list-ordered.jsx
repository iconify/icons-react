import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y27i9bc_p.css';
import '../../css/o/o6ulrcchv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y27i9bc_p"/><path class="o6ulrcchv"/></g>`,
		"fallback": "hugeicons:list-ordered",
	});
}

export default Component;
