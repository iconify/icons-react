import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/naa-u6bmi.css';
import '../../css/x/x6ho19gwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="naa-u6bmi"/><path class="x6ho19gwo"/></g>`,
		"fallback": "reicon:medal-duotone",
	});
}

export default Component;
