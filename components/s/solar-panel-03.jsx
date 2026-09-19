import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pjhp_mbfh.css';
import '../../css/a/a5afrozix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pjhp_mbfh"/><path class="a5afrozix"/></g>`,
		"fallback": "hugeicons:solar-panel-03",
	});
}

export default Component;
