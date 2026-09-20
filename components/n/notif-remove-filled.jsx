import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuzoaq-8e.css';
import '../../css/y/yf683vypj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cuzoaq-8e"/><path class="yf683vypj"/></g>`,
		"fallback": "reicon:notif-remove-filled",
	});
}

export default Component;
