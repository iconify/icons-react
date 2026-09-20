import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5usuna3u.css';
import '../../css/y/yzhs5lmbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5usuna3u"/><path class="yzhs5lmbh"/></g>`,
		"fallback": "solar:tablet-bold-duotone",
	});
}

export default Component;
