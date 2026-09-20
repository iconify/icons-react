import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hrjjki0eb.css';
import '../../css/o/owgveppcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hrjjki0eb"/><path clip-rule="evenodd" class="owgveppcl"/></g>`,
		"fallback": "nrk:thumbs-up",
	});
}

export default Component;
