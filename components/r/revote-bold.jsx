import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/of-6m5b-e.css';
import '../../css/e/ey7z_xtgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="of-6m5b-e"/><path class="ey7z_xtgt"/></g>`,
		"fallback": "solar:revote-bold",
	});
}

export default Component;
