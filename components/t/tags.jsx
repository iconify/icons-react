import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-oqg7ecb.css';
import '../../css/l/l3o6y6wlw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x-oqg7ecb"/><path class="l3o6y6wlw"/></g>`,
		"fallback": "bi:tags",
	});
}

export default Component;
