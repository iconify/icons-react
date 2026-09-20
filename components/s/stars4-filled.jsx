import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p8en62b-a.css';
import '../../css/v/vzbothb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p8en62b-a"/><path clip-rule="evenodd" class="vzbothb8x"/></g>`,
		"fallback": "reicon:stars4-filled",
	});
}

export default Component;
