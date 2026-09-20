import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzi0p1baf.css';
import '../../css/m/mew56wx_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gzi0p1baf"/><path class="mew56wx_h"/></g>`,
		"fallback": "reicon:stars-duotone",
	});
}

export default Component;
