import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xlrp_nb2f.css';
import '../../css/a/a272a3b0i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xlrp_nb2f"/><path class="a272a3b0i"/></g>`,
		"fallback": "pepicons:pen",
	});
}

export default Component;
