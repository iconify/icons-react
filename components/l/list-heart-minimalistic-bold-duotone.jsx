import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-98ys9ya.css';
import '../../css/u/ued1czbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n-98ys9ya"/><path class="ued1czbkb"/></g>`,
		"fallback": "solar:list-heart-minimalistic-bold-duotone",
	});
}

export default Component;
