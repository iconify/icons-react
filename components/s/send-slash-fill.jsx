import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnpnx-u3q.css';
import '../../css/k/kg5x9-bjh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dnpnx-u3q"/><path class="kg5x9-bjh"/></g>`,
		"fallback": "bi:send-slash-fill",
	});
}

export default Component;
