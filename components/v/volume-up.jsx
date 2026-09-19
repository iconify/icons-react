import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y2k5fkb1h.css';
import '../../css/j/jyx_tscdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y2k5fkb1h"/><path class="jyx_tscdc"/></g>`,
		"fallback": "hugeicons:volume-up",
	});
}

export default Component;
