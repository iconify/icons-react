import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz383acsq.css';
import '../../css/v/vza56dhsg.css';
import '../../css/u/uxo0bkb9z.css';
import '../../css/d/dnfa3n46b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iz383acsq"/><path class="vza56dhsg"/><path class="uxo0bkb9z"/><path class="dnfa3n46b"/></g>`,
		"fallback": "lucide-extended:save-all-duotone",
	});
}

export default Component;
