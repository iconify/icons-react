import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uh8evbbul.css';
import '../../css/v/vv52kbcqz.css';
import '../../css/q/qq--gqc6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uh8evbbul"/><path class="vv52kbcqz"/><path class="qq--gqc6p"/></g>`,
		"fallback": "solar:map-point-wave-linear",
	});
}

export default Component;
