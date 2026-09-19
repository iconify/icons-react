import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/balw8-bvw.css';
import '../../css/n/n5qoxqb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="balw8-bvw"/><path class="n5qoxqb8u"/></g>`,
		"fallback": "griddy-icons:thunderstorm-strong",
	});
}

export default Component;
