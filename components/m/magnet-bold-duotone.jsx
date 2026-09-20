import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcl_vm3gu.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e6j6dgbiz.css';
import '../../css/m/mgnw8cbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vcl_vm3gu"/><g class="mc2zb0bvp"><path class="e6j6dgbiz"/><path class="mgnw8cbbw"/></g></g>`,
		"fallback": "solar:magnet-bold-duotone",
	});
}

export default Component;
