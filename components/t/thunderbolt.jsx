import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4es0wbet.css';
import '../../css/w/w_n_wubwb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e4es0wbet"/><path class="w_n_wubwb"/></g>`,
		"fallback": "bi:thunderbolt",
	});
}

export default Component;
