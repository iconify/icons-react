import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mjti1ubds.css';
import '../../css/y/y4it-0ebg.css';
import '../../css/j/jojqpu_4z.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mjti1ubds"/><circle class="y4it-0ebg"/><circle class="jojqpu_4z"/></g>`,
		"fallback": "iwwa:option-horizontal",
	});
}

export default Component;
