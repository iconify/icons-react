import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oh657_bsq.css';
import '../../css/t/t5otw1bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oh657_bsq secondary"/><path class="primary t5otw1bjg"/></g>`,
		"fallback": "iconaut:moon-sparkles-duotone",
	});
}

export default Component;
