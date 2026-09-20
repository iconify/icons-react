import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vtv-2cb3s.css';
import '../../css/p/pztoz5bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vtv-2cb3s"/><path class="pztoz5bfh"/></g>`,
		"fallback": "pixelarticons:robot-face-sad",
	});
}

export default Component;
