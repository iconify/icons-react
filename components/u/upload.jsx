import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j13g7rb-h.css';
import '../../css/s/s2c-xnbgp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j13g7rb-h"/><path class="s2c-xnbgp"/></g>`,
		"fallback": "bi:upload",
	});
}

export default Component;
