import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g34lksqnr.css';
import '../../css/m/mhantq68w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g34lksqnr"/><path class="mhantq68w"/></g>`,
		"fallback": "bi:reply-all",
	});
}

export default Component;
