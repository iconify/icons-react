import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/km9xy360q.css';
import '../../css/e/efcuzbb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="km9xy360q"/><path class="efcuzbb9b"/></g>`,
		"fallback": "lucide-extended:sun-duotone",
	});
}

export default Component;
