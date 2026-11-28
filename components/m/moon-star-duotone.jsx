import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qj83j2bod.css';
import '../../css/r/re056sk4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qj83j2bod secondary"/><path class="primary re056sk4f"/></g>`,
		"fallback": "iconaut:moon-star-duotone",
	});
}

export default Component;
