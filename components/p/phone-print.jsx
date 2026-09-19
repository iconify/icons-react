import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dd3lsl1ga.css';
import '../../css/y/ypuiyfb9m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dd3lsl1ga"/><path clip-rule="evenodd" class="ypuiyfb9m"/></g>`,
		"fallback": "pepicons:phone-print",
	});
}

export default Component;
