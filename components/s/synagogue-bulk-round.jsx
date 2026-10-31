import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/erm1a-b0c.css';
import '../../css/o/oz9_x_b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="erm1a-b0c"/><path class="oz9_x_b3d"/></g>`,
		"fallback": "coolicons:synagogue-bulk-round",
	});
}

export default Component;
