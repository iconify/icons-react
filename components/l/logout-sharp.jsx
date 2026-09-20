import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qu4c2sf-f.css';
import '../../css/d/d6eauccln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qu4c2sf-f"/><path class="d6eauccln"/></g>`,
		"fallback": "pixelarticons:logout-sharp",
	});
}

export default Component;
