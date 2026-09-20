import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/reiq4mbdq.css';
import '../../css/y/yvas1-b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="reiq4mbdq"/><path class="yvas1-b6y"/></g>`,
		"fallback": "reicon:plane2-duotone",
	});
}

export default Component;
