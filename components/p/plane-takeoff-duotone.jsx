import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7uhq0b0c.css';
import '../../css/k/ktklox9us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7uhq0b0c"/><path class="ktklox9us"/></g>`,
		"fallback": "lucide-extended:plane-takeoff-duotone",
	});
}

export default Component;
