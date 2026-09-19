import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1n1qz70x.css';
import '../../css/o/oqzimvh-d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1n1qz70x"/><path class="oqzimvh-d"/></g>`,
		"fallback": "bi:translate",
	});
}

export default Component;
