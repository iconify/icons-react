import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dc1_je1nn.css';
import '../../css/l/lfsa_z-qv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dc1_je1nn"/><path class="lfsa_z-qv"/></g>`,
		"fallback": "bi:usb-mini",
	});
}

export default Component;
