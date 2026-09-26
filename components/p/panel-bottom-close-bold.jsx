import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsn2juklt.css';
import '../../css/p/pn5x2nb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gsn2juklt"/><path class="pn5x2nb8r"/></g>`,
		"fallback": "solar:panel-bottom-close-bold",
	});
}

export default Component;
