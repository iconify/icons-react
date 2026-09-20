import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gh26_ab6m.css';
import '../../css/o/ow3pgabda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gh26_ab6m"/><path class="ow3pgabda"/></g>`,
		"fallback": "solar:mouse-minimalistic-bold-duotone",
	});
}

export default Component;
