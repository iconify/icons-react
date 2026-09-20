import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/v/vuo7x-buu.css';
import '../../css/c/cb6zf-znd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="vuo7x-buu"/><path class="cb6zf-znd"/></g>`,
		"fallback": "solar:link-circle-bold-duotone",
	});
}

export default Component;
