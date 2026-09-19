import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj_53z01y.css';
import '../../css/s/sd8lq6bxw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bj_53z01y"/><path class="sd8lq6bxw"/></g>`,
		"fallback": "bi:speedometer",
	});
}

export default Component;
