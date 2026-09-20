import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9ops9byb.css';
import '../../css/l/lbzts5gwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e9ops9byb"/><path class="lbzts5gwx"/></g>`,
		"fallback": "solar:planet-bold",
	});
}

export default Component;
