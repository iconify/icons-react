import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwu146b2l.css';
import '../../css/k/km4u5cc_i.css';
import '../../css/q/qtktxacxl.css';
import '../../css/p/ptzle3bnr.css';
import '../../css/k/k2hspqbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lwu146b2l"/><path class="km4u5cc_i"/><path class="qtktxacxl"/><path class="ptzle3bnr"/><path class="k2hspqbiv"/></g>`,
		"fallback": "solar:magic-stick-3-bold",
	});
}

export default Component;
