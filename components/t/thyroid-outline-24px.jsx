import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wyw5ebctg.css';
import '../../css/l/leshkdbtw.css';
import '../../css/v/v75-yb1pz.css';
import '../../css/u/u1mtvbbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wyw5ebctg"/><path class="leshkdbtw"/><path class="v75-yb1pz"/><path class="u1mtvbbes"/></g>`,
		"fallback": "healthicons:thyroid-outline-24px",
	});
}

export default Component;
