import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ah1xy3bkb.css';
import '../../css/a/a2q2ejbuu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ah1xy3bkb"/><path class="a2q2ejbuu"/></g>`,
		"fallback": "bi:safe",
	});
}

export default Component;
