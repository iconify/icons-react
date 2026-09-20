import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnk3glbbr.css';
import '../../css/r/r9jbezb2f.css';
import '../../css/q/q3xuzddzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dnk3glbbr"/><path class="r9jbezb2f"/><path class="q3xuzddzl"/></g>`,
		"fallback": "solar:menu-dots-bold-duotone",
	});
}

export default Component;
