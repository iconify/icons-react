import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8_lm9b9t.css';
import '../../css/j/jrgxclcnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h8_lm9b9t"/><path class="jrgxclcnp"/></g>`,
		"fallback": "coolicons:trophy-bulk-round",
	});
}

export default Component;
