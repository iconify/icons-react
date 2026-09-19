import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h32ym5bol.css';
import '../../css/g/ge12k2ere.css';
import '../../css/m/m8sh_pq6p.css';
import '../../css/v/v83zgccxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h32ym5bol"/><path class="ge12k2ere"/><path class="m8sh_pq6p"/><path class="v83zgccxv"/></g>`,
		"fallback": "bi:markdown",
	});
}

export default Component;
