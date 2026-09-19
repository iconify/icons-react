import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dip3swxul.css';
import '../../css/n/n464jtbvv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="dip3swxul"/><path class="n464jtbvv"/></g>`,
		"fallback": "garden:monitor-fill-12",
	});
}

export default Component;
