import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pqcsmgbnr.css';
import '../../css/i/ix5pio37y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pqcsmgbnr"/><path class="ix5pio37y"/></g>`,
		"fallback": "mynaui:power-solid",
	});
}

export default Component;
