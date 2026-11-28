import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sulhnkb0p.css';
import '../../css/a/apzxh7b1f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sulhnkb0p"/><path class="apzxh7b1f"/></g>`,
		"fallback": "pullo:layout-dashboard-duotone",
	});
}

export default Component;
