import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xzd8ubc9v.css';
import '../../css/j/j6knogbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xzd8ubc9v"/><path class="j6knogbdh"/></g>`,
		"fallback": "pixelarticons:mail-right",
	});
}

export default Component;
