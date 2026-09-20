import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p-3r95_-g.css';
import '../../css/j/jumea5btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p-3r95_-g"/><path class="jumea5btm"/></g>`,
		"fallback": "reicon:plate-duotone",
	});
}

export default Component;
