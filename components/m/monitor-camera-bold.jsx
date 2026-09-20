import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmltt1bqg.css';
import '../../css/z/zbc7-aboz.css';
import '../../css/d/d0_o308xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zmltt1bqg"/><path class="zbc7-aboz"/><path class="d0_o308xd"/></g>`,
		"fallback": "solar:monitor-camera-bold",
	});
}

export default Component;
