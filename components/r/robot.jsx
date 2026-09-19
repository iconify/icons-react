import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqse_f0cv.css';
import '../../css/c/cs23t6brh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rqse_f0cv"/><path class="cs23t6brh"/></g>`,
		"fallback": "bi:robot",
	});
}

export default Component;
