import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szmo2io3p.css';
import '../../css/r/rurb3tljq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="szmo2io3p"/><path class="rurb3tljq"/></g>`,
		"fallback": "reicon:pen-square-filled",
	});
}

export default Component;
