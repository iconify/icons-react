import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h3lc-xbuy.css';
import '../../css/y/y-8uw-nze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h3lc-xbuy"/><path clip-rule="evenodd" class="y-8uw-nze"/></g>`,
		"fallback": "reicon:terminal-square",
	});
}

export default Component;
