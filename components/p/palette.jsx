import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/scaazchgz.css';
import '../../css/d/du7rvrbhr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="scaazchgz"/><path class="du7rvrbhr"/></g>`,
		"fallback": "bi:palette",
	});
}

export default Component;
