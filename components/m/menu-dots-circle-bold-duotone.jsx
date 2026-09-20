import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/y/y-xxqpbcl.css';
import '../../css/o/o3omre-is.css';
import '../../css/g/g7m_9fb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="y-xxqpbcl"/><path class="o3omre-is"/><path class="g7m_9fb1u"/></g>`,
		"fallback": "solar:menu-dots-circle-bold-duotone",
	});
}

export default Component;
