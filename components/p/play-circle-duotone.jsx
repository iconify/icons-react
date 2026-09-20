import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-g70kopb.css';
import '../../css/x/xwj9z8b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c-g70kopb"/><path class="xwj9z8b_h"/></g>`,
		"fallback": "reicon:play-circle-duotone",
	});
}

export default Component;
