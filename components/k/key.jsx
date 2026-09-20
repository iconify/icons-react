import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y5utmh9wq.css';
import '../../css/y/y6fz92bxe.css';
import '../../css/a/a3-4ixr3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y5utmh9wq"/><path clip-rule="evenodd" class="y6fz92bxe"/><path clip-rule="evenodd" class="a3-4ixr3v"/></g>`,
		"fallback": "pepicons-print:key",
	});
}

export default Component;
