import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xzd8ubc9v.css';
import '../../css/z/z1bc9u3lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xzd8ubc9v"/><path class="z1bc9u3lg"/></g>`,
		"fallback": "pixelarticons:mail-right-sharp",
	});
}

export default Component;
