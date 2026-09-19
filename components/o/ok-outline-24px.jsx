import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ey2pazb_b.css';
import '../../css/m/m5ap_-bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ey2pazb_b"/><path clip-rule="evenodd" class="m5ap_-bph"/></g>`,
		"fallback": "healthicons:ok-outline-24px",
	});
}

export default Component;
