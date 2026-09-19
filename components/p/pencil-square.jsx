import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ysunjjg2c.css';
import '../../css/l/lp4tk8bll.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ysunjjg2c"/><path class="lp4tk8bll"/></g>`,
		"fallback": "bi:pencil-square",
	});
}

export default Component;
