import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w7if88byo.css';
import '../../css/m/mfo7-l9_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w7if88byo"/><path clip-rule="evenodd" class="mfo7-l9_m"/></g>`,
		"fallback": "reicon:rocket2",
	});
}

export default Component;
