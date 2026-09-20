import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lu4pdbb1e.css';
import '../../css/f/fasso6-7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lu4pdbb1e"/><path class="fasso6-7v"/></g>`,
		"fallback": "pixelarticons:notes-sharp",
	});
}

export default Component;
