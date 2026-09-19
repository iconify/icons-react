import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/a/aw14a30if.css';
import '../../css/y/yr_1obcsc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="aw14a30if"/><path class="yr_1obcsc"/></g>`,
		"fallback": "catppuccin:robots",
	});
}

export default Component;
