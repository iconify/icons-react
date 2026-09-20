import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tlyj1gbrg.css';
import '../../css/n/nc__fwbea.css';
import '../../css/t/tgk0i4-3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tlyj1gbrg"/><path class="nc__fwbea"/><path class="tgk0i4-3p"/></g>`,
		"fallback": "solar:table-cells-merge-bold-duotone",
	});
}

export default Component;
