import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmz17d05v.css';
import '../../css/m/mfj4yn78t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mmz17d05v"/><path class="mfj4yn78t"/></g>`,
		"fallback": "solar:link-square-outline",
	});
}

export default Component;
