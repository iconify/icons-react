import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rs1mb3b0n.css';
import '../../css/w/wdmep9x_m.css';
import '../../css/u/utinae2nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rs1mb3b0n"/><path class="wdmep9x_m"/><path clip-rule="evenodd" class="utinae2nn"/></g>`,
		"fallback": "solar:monitor-smartphone-bold",
	});
}

export default Component;
