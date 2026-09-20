import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/weirdwbxn.css';
import '../../css/f/f449yyyyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="weirdwbxn"/><path class="f449yyyyz"/></g>`,
		"fallback": "reicon:ticket-sale",
	});
}

export default Component;
