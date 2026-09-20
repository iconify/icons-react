import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h5zfvxb5q.css';
import '../../css/z/z7apsqb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h5zfvxb5q"/><path class="z7apsqb6j"/></g>`,
		"fallback": "reicon:sim-duotone",
	});
}

export default Component;
