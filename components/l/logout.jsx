import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qu4c2sf-f.css';
import '../../css/c/ck4b_vbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qu4c2sf-f"/><path class="ck4b_vbbe"/></g>`,
		"fallback": "pixelarticons:logout",
	});
}

export default Component;
