import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/emu04lb-f.css';
import '../../css/d/d992vwbtc.css';
import '../../css/i/izwsa0kiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="emu04lb-f"/><path class="d992vwbtc"/><path class="izwsa0kiq"/></g>`,
		"fallback": "solar:traffic-economy-linear",
	});
}

export default Component;
