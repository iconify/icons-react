import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tsellmt5q.css';
import '../../css/o/ofe42gb8z.css';
import '../../css/m/mzfc7hb3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tsellmt5q"/><path class="ofe42gb8z"/><path class="mzfc7hb3t"/></g>`,
		"fallback": "bi:journal-check",
	});
}

export default Component;
