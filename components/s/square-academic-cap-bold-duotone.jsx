import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc3j5kb_k.css';
import '../../css/c/cv8_a4bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mc3j5kb_k"/><path class="cv8_a4bbb"/></g>`,
		"fallback": "solar:square-academic-cap-bold-duotone",
	});
}

export default Component;
