import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cqm1unbbv.css';
import '../../css/i/i_rnndbgt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cqm1unbbv"/><path class="i_rnndbgt"/></g>`,
		"fallback": "bi:toggle2-off",
	});
}

export default Component;
