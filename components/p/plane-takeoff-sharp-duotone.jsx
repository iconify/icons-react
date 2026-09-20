import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fnsafsbbs.css';
import '../../css/o/o8z14obsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fnsafsbbs"/><path class="o8z14obsa"/></g>`,
		"fallback": "keyline-icons:plane-takeoff-sharp-duotone",
	});
}

export default Component;
