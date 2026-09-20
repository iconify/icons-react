import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cj5fl0bfv.css';
import '../../css/h/hlu10ub1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cj5fl0bfv"/><path class="hlu10ub1h"/></g>`,
		"fallback": "keyline-icons:rocket-2-sharp-duotone",
	});
}

export default Component;
