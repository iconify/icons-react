import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/glzbbbbzn.css';
import '../../css/d/dz5euubxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="glzbbbbzn"/><path class="dz5euubxg"/></g>`,
		"fallback": "lucide-extended:utensils-duotone",
	});
}

export default Component;
