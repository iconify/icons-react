import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u8b3i2j6u.css';
import '../../css/j/jly_q426s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u8b3i2j6u"/><path class="jly_q426s"/></g>`,
		"fallback": "solar:verified-check-line-duotone",
	});
}

export default Component;
