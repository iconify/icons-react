import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v0lee0ovb.css';
import '../../css/c/ckxiefb_m.css';
import '../../css/e/e8wg7vb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v0lee0ovb"/><path class="ckxiefb_m"/><path class="e8wg7vb-j"/></g>`,
		"fallback": "keyline-icons:trophy-sharp-duotone",
	});
}

export default Component;
