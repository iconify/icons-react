import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4znnacdc.css';
import '../../css/f/fpbx_1brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w4znnacdc"/><path clip-rule="evenodd" class="fpbx_1brj"/></g>`,
		"fallback": "reicon:sidebar-filled",
	});
}

export default Component;
