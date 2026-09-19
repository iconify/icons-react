import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wiyay3bwe.css';
import '../../css/m/m52rumb3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wiyay3bwe"/><path class="m52rumb3e"/></g>`,
		"fallback": "bi:rocket-fill",
	});
}

export default Component;
