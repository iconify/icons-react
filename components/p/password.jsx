import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yd727nb8u.css';
import '../../css/m/mrvrmqywu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yd727nb8u"/><path clip-rule="evenodd" class="mrvrmqywu"/></g>`,
		"fallback": "gg:password",
	});
}

export default Component;
