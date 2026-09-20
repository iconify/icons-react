import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/grne82p6n.css';
import '../../css/u/u7au1wbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="grne82p6n"/><path class="u7au1wbwk"/></g>`,
		"fallback": "keyline-icons:pen-duotone",
	});
}

export default Component;
