import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/syanz0xqe.css';
import '../../css/m/mrca2uc4y.css';
import '../../css/r/r72cq5izs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="syanz0xqe"/><path class="mrca2uc4y"/><path class="r72cq5izs"/></g>`,
		"fallback": "at-icons:knot",
	});
}

export default Component;
