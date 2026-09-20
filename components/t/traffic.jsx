import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vudf-5u7u.css';
import '../../css/x/x0mbbky7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vudf-5u7u"/><path class="x0mbbky7w"/></g>`,
		"fallback": "reicon:traffic",
	});
}

export default Component;
