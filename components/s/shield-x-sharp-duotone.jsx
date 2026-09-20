import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fvd42ib4r.css';
import '../../css/w/w5-w_sbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fvd42ib4r"/><path class="w5-w_sbbd"/></g>`,
		"fallback": "keyline-icons:shield-x-sharp-duotone",
	});
}

export default Component;
