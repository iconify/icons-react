import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ug--vacuy.css';
import '../../css/e/eisd4xo_m.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ug--vacuy"/><path class="eisd4xo_m"/></g>`,
		"fallback": "iwwa:monitoring",
	});
}

export default Component;
