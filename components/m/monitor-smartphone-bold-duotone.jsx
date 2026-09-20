import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xrcticvhp.css';
import '../../css/t/t4e23u-au.css';
import '../../css/c/cpm8z1bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xrcticvhp"/><path clip-rule="evenodd" class="t4e23u-au"/><path class="cpm8z1bdi"/></g>`,
		"fallback": "solar:monitor-smartphone-bold-duotone",
	});
}

export default Component;
