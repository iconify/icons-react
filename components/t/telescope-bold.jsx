import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj3877h8f.css';
import '../../css/q/qus9g24-x.css';
import '../../css/b/bej489v3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nj3877h8f"/><path class="qus9g24-x"/><path class="bej489v3t"/></g>`,
		"fallback": "solar:telescope-bold",
	});
}

export default Component;
