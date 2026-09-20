import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1nmznbff.css';
import '../../css/d/dyy63hbaz.css';
import '../../css/y/y3q2v7bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j1nmznbff"/><path class="dyy63hbaz"/><path class="y3q2v7bge"/></g>`,
		"fallback": "solar:star-rings-outline",
	});
}

export default Component;
