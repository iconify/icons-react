import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d__9kbylk.css';
import '../../css/p/peo_w4jfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d__9kbylk"/><path clip-rule="evenodd" class="peo_w4jfv"/></g>`,
		"fallback": "healthicons:medicines-24px",
	});
}

export default Component;
