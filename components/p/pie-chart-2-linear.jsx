import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g3t7xqb1h.css';
import '../../css/i/iqx3xpfuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g3t7xqb1h"/><path class="iqx3xpfuf"/></g>`,
		"fallback": "solar:pie-chart-2-linear",
	});
}

export default Component;
