import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8d4d8buo.css';
import '../../css/d/dcmbidbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v8d4d8buo"/><path class="dcmbidbny"/></g>`,
		"fallback": "healthicons:low-level-outline-24px",
	});
}

export default Component;
