import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/glkqlxbac.css';
import '../../css/f/fvwt6sbil.css';
import '../../css/g/goklkbcov.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="glkqlxbac"/><path class="fvwt6sbil"/><path class="goklkbcov"/></g>`,
		"fallback": "flag:ml-4x3",
	});
}

export default Component;
