import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc3j5kb_k.css';
import '../../css/g/ga3fc02df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mc3j5kb_k"/><path class="ga3fc02df"/></g>`,
		"fallback": "solar:square-academic-cap-bold",
	});
}

export default Component;
