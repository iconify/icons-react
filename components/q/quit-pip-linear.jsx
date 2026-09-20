import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i2iiwfb2x.css';
import '../../css/x/xnh1ybbye.css';
import '../../css/m/mqszbo63g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i2iiwfb2x"/><path class="xnh1ybbye"/><path class="mqszbo63g"/></g>`,
		"fallback": "solar:quit-pip-linear",
	});
}

export default Component;
