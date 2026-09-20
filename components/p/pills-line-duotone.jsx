import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fnayhz3pu.css';
import '../../css/l/l5f9elzdh.css';
import '../../css/j/j_5sfhbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fnayhz3pu"/><path class="l5f9elzdh"/><path class="j_5sfhbxu"/></g>`,
		"fallback": "solar:pills-line-duotone",
	});
}

export default Component;
