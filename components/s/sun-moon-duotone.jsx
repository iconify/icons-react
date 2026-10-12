import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mfs8q8gqb.css';
import '../../css/t/t0g5d7bgq.css';
import '../../css/m/ms4raqipz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mfs8q8gqb"/><path class="t0g5d7bgq"/><path class="ms4raqipz"/></g>`,
		"fallback": "lucide-extended:sun-moon-duotone",
	});
}

export default Component;
