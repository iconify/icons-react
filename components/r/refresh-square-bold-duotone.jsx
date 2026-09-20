import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuose96rb.css';
import '../../css/c/cxu0h3bjk.css';
import '../../css/c/c8oiykn4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuose96rb"/><path class="cxu0h3bjk"/><path class="c8oiykn4r"/></g>`,
		"fallback": "solar:refresh-square-bold-duotone",
	});
}

export default Component;
