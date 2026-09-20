import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xtx0s6u8w.css';
import '../../css/q/q2gjtkzgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xtx0s6u8w"/><path class="q2gjtkzgd"/></g>`,
		"fallback": "solar:planet-2-line-duotone",
	});
}

export default Component;
