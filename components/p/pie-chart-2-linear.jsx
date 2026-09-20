import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsm05tbhu.css';
import '../../css/o/omdddcagb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rsm05tbhu"/><path class="omdddcagb"/></g>`,
		"fallback": "solar:pie-chart-2-linear",
	});
}

export default Component;
