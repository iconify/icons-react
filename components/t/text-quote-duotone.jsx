import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sxlmeobov.css';
import '../../css/l/l65bzvdhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sxlmeobov"/><path class="l65bzvdhp primary"/></g>`,
		"fallback": "iconaut:text-quote-duotone",
	});
}

export default Component;
