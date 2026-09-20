import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drzw8x01u.css';
import '../../css/w/w3kiwyfpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="drzw8x01u"/><path class="w3kiwyfpl"/></g>`,
		"fallback": "reicon:link4-filled",
	});
}

export default Component;
