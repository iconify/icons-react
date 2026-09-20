import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_5-cnc6s.css';
import '../../css/e/eewomobar.css';
import '../../css/g/gzjneqlby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_5-cnc6s"/><path class="eewomobar"/><path class="gzjneqlby"/></g>`,
		"fallback": "solar:slider-horizontal-bold",
	});
}

export default Component;
