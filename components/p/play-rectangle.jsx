import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6k9lrz9g.css';
import '../../css/f/f0t37ercu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6k9lrz9g"/><path clip-rule="evenodd" class="f0t37ercu"/></g>`,
		"fallback": "nrk:play-rectangle",
	});
}

export default Component;
