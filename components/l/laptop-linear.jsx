import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iqwgs_b2i.css';
import '../../css/e/ecwgwqbhc.css';
import '../../css/h/hrqohn1pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iqwgs_b2i"/><path class="ecwgwqbhc"/><path class="hrqohn1pc"/></g>`,
		"fallback": "solar:laptop-linear",
	});
}

export default Component;
