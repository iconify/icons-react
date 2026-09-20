import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xu1upfl1n.css';
import '../../css/s/s5_idabhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xu1upfl1n"/><path class="s5_idabhv"/></g>`,
		"fallback": "si:pin-alt-1-duotone",
	});
}

export default Component;
