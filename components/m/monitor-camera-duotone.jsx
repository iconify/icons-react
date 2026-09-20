import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu1ma5bdz.css';
import '../../css/g/g9vsr2u4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uu1ma5bdz"/><path class="g9vsr2u4k"/></g>`,
		"fallback": "reicon:monitor-camera-duotone",
	});
}

export default Component;
