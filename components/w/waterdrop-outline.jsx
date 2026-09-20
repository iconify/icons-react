import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9tcpi89i.css';
import '../../css/j/j9d_pibhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v9tcpi89i"/><path clip-rule="evenodd" class="j9d_pibhq"/></g>`,
		"fallback": "solar:waterdrop-outline",
	});
}

export default Component;
