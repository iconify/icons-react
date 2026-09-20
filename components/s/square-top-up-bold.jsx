import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bqmcw4b2i.css';
import '../../css/p/plecm0b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bqmcw4b2i"/><path class="plecm0b8u"/></g>`,
		"fallback": "solar:square-top-up-bold",
	});
}

export default Component;
