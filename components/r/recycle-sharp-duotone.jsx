import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mmcw3q0_g.css';
import '../../css/v/vi-86ybww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mmcw3q0_g"/><path class="vi-86ybww"/></g>`,
		"fallback": "keyline-icons:recycle-sharp-duotone",
	});
}

export default Component;
