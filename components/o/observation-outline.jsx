import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1wkc224w.css';
import '../../css/x/x_l6dhb_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w1wkc224w"/><path clip-rule="evenodd" class="x_l6dhb_f"/></g>`,
		"fallback": "healthicons:observation-outline",
	});
}

export default Component;
