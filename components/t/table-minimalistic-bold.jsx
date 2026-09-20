import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/scfobobol.css';
import '../../css/q/q2cxxmbaq.css';
import '../../css/i/iz_17cc_j.css';
import '../../css/h/h3rm8q4za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="scfobobol"/><path class="q2cxxmbaq"/><path class="iz_17cc_j"/><path class="h3rm8q4za"/></g>`,
		"fallback": "solar:table-minimalistic-bold",
	});
}

export default Component;
