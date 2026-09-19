import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wuva_jb4y.css';
import '../../css/o/ozpbdqbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wuva_jb4y"/><path class="ozpbdqbex"/></g>`,
		"fallback": "hugeicons:shield-energy",
	});
}

export default Component;
