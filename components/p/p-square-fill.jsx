import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnfujubwi.css';
import '../../css/f/fl9z2lbeo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pnfujubwi"/><path class="fl9z2lbeo"/></g>`,
		"fallback": "bi:p-square-fill",
	});
}

export default Component;
