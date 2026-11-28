import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/irbxbdbff.css';
import '../../css/s/sgbuj6yzt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="irbxbdbff"/><path class="sgbuj6yzt"/></g>`,
		"fallback": "pullo:user-circle-star-duotone",
	});
}

export default Component;
