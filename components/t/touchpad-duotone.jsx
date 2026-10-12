import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tni3ehbvj.css';
import '../../css/g/gs6pthb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tni3ehbvj"/><path class="gs6pthb9k"/></g>`,
		"fallback": "lucide-extended:touchpad-duotone",
	});
}

export default Component;
