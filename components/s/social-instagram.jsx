import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-tqjdofv.css';
import '../../css/m/m2kr2vb1b.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-tqjdofv"/><path class="m2kr2vb1b"/></g>`,
		"fallback": "foundation:social-instagram",
	});
}

export default Component;
