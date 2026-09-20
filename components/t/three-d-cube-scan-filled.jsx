import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjx1w-iux.css';
import '../../css/g/gb84igbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjx1w-iux"/><path class="gb84igbav"/></g>`,
		"fallback": "reicon:three-d-cube-scan-filled",
	});
}

export default Component;
