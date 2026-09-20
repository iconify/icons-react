import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/em6y05bsv.css';
import '../../css/g/gutmv4bns.css';
import '../../css/r/rlhp6bb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="em6y05bsv"/><path class="gutmv4bns"/><path class="rlhp6bb4t"/></g>`,
		"fallback": "solar:minimalistic-magnifier-zoom-in-bold-duotone",
	});
}

export default Component;
