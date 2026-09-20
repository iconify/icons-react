import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/asgo7gbiy.css';
import '../../css/n/nbadl6rrm.css';
import '../../css/z/zz5y1lbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="asgo7gbiy"/><path class="nbadl6rrm"/><path class="zz5y1lbdt"/></g>`,
		"fallback": "solar:square-academic-cap-2-bold-duotone",
	});
}

export default Component;
