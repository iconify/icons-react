import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_45fb3ek.css';
import '../../css/n/nyl59rfbs.css';
import '../../css/j/jitkztbnx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="o_45fb3ek"/><circle class="nyl59rfbs"/><circle class="jitkztbnx"/></g>`,
		"fallback": "garden:overflow-stroke-16",
	});
}

export default Component;
