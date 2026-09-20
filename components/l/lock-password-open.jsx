import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oiieruvmv.css';
import '../../css/f/f9dx2obbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oiieruvmv"/><path clip-rule="evenodd" class="f9dx2obbu"/></g>`,
		"fallback": "reicon:lock-password-open",
	});
}

export default Component;
