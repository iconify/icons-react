import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k19zq0b1v.css';
import '../../css/r/rwhs1qc8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k19zq0b1v"/><path class="rwhs1qc8d"/></g>`,
		"fallback": "hugeicons:unfold-horizontal",
	});
}

export default Component;
