import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayfuu-bci.css';
import '../../css/p/pm_7t5bxb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ayfuu-bci"/><path class="pm_7t5bxb"/></g>`,
		"fallback": "bi:postcard-fill",
	});
}

export default Component;
