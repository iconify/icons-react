import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tlyj1gbrg.css';
import '../../css/t/tor0ozb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tlyj1gbrg"/><path class="tor0ozb-h"/></g>`,
		"fallback": "solar:table-properties-bold-duotone",
	});
}

export default Component;
