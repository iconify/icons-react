import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nf9voqcxl.css';
import '../../css/g/ggcw15xcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nf9voqcxl"/><path class="ggcw15xcg"/></g>`,
		"fallback": "healthicons:running-outline-24px",
	});
}

export default Component;
