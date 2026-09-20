import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/r/rajyopb-s.css';
import '../../css/w/w64_jrb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="rajyopb-s"/><path class="w64_jrb2m"/></g>`,
		"fallback": "solar:round-transfer-horizontal-bold-duotone",
	});
}

export default Component;
