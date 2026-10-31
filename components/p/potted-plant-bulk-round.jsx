import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ew3welbbq.css';
import '../../css/f/fo8wb1bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ew3welbbq"/><path class="fo8wb1bxf"/></g>`,
		"fallback": "coolicons:potted-plant-bulk-round",
	});
}

export default Component;
