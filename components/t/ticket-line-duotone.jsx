import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bz4gtlo_o.css';
import '../../css/r/r4s01_h_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bz4gtlo_o"/><path class="r4s01_h_a"/></g>`,
		"fallback": "solar:ticket-line-duotone",
	});
}

export default Component;
