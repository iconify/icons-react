import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/trhkux1pt.css';
import '../../css/g/gcz4ol8mm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="trhkux1pt"/><path class="gcz4ol8mm"/></g>`,
		"fallback": "bi:sim",
	});
}

export default Component;
