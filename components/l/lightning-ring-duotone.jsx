import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drhsrbcsr.css';
import '../../css/z/z-jg4sjrr.css';
import '../../css/p/ptr3-9b_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="drhsrbcsr"/><path class="z-jg4sjrr"/><circle class="ptr3-9b_e"/></g>`,
		"fallback": "lets-icons:lightning-ring-duotone",
	});
}

export default Component;
