import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/ws80geb3t.css';
import '../../css/d/dwl7o1b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ws80geb3t"/><path class="dwl7o1b_l"/></g>`,
		"fallback": "reicon:power-off",
	});
}

export default Component;
