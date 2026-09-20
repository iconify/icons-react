import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um7d-ub6d.css';
import '../../css/y/y0r750qyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="um7d-ub6d"/><path class="y0r750qyi"/></g>`,
		"fallback": "reicon:music-circle-filled",
	});
}

export default Component;
