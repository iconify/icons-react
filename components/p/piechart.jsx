import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_71t2bfr.css';
import '../../css/w/wm1wz458c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l_71t2bfr"/><path class="wm1wz458c"/></g>`,
		"fallback": "et:piechart",
	});
}

export default Component;
