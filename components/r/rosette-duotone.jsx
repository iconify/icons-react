import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xcdvd4t0s.css';
import '../../css/f/f1kybrmwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xcdvd4t0s"/><path class="f1kybrmwb primary"/></g>`,
		"fallback": "iconaut:rosette-duotone",
	});
}

export default Component;
