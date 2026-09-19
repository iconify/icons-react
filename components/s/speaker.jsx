import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icn6_doub.css';
import '../../css/c/cq2rbsbcp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="icn6_doub"/><path class="cq2rbsbcp"/></g>`,
		"fallback": "at-icons:speaker",
	});
}

export default Component;
