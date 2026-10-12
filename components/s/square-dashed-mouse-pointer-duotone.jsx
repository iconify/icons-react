import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0_9pqbee.css';
import '../../css/v/v3osjkb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q0_9pqbee"/><path class="v3osjkb2w"/></g>`,
		"fallback": "lucide-extended:square-dashed-mouse-pointer-duotone",
	});
}

export default Component;
