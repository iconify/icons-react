import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bwu_g5bwh.css';
import '../../css/v/vuezxabre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bwu_g5bwh"/><path class="vuezxabre"/></g>`,
		"fallback": "keyline-icons:smartphone-arrow-up-left-sharp-duotone",
	});
}

export default Component;
