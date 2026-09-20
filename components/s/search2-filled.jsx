import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifw3vze2y.css';
import '../../css/w/wcg58tb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ifw3vze2y"/><path clip-rule="evenodd" class="wcg58tb6w"/></g>`,
		"fallback": "reicon:search2-filled",
	});
}

export default Component;
