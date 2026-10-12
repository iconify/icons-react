import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu6uvlbwl.css';
import '../../css/f/fpur0xb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qu6uvlbwl"/><path class="fpur0xb_h"/></g>`,
		"fallback": "lucide-extended:type-outline-duotone",
	});
}

export default Component;
