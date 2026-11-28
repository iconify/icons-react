import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wvaah2g1g.css';
import '../../css/f/f88drnqcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wvaah2g1g"/><path class="f88drnqcp"/></g>`,
		"fallback": "iconaut:pennant-solid",
	});
}

export default Component;
