import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wt36bfwkg.css';
import '../../css/t/tdj3ebboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wt36bfwkg"/><path class="primary tdj3ebboe"/></g>`,
		"fallback": "iconaut:music-off-duotone",
	});
}

export default Component;
