import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oaxdq7-2d.css';
import '../../css/w/wtsphigfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oaxdq7-2d secondary"/><path class="primary wtsphigfz"/></g>`,
		"fallback": "iconaut:map-duotone",
	});
}

export default Component;
