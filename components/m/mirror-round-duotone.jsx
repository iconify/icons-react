import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdua6pbdo.css';
import '../../css/r/rax4knb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdua6pbdo"/><path class="rax4knb4y"/></g>`,
		"fallback": "lucide-extended:mirror-round-duotone",
	});
}

export default Component;
