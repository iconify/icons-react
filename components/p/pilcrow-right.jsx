import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9d9l1bwc.css';
import '../../css/s/stfhoyxii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9d9l1bwc"/><path class="stfhoyxii"/></g>`,
		"fallback": "hugeicons:pilcrow-right",
	});
}

export default Component;
