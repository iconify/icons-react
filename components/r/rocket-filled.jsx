import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gazjmccdw.css';
import '../../css/p/p3duhjivw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gazjmccdw"/><path clip-rule="evenodd" class="p3duhjivw"/></g>`,
		"fallback": "reicon:rocket-filled",
	});
}

export default Component;
