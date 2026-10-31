import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3bx-ybwa.css';
import '../../css/o/o_x9s7vbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k3bx-ybwa"/><path class="o_x9s7vbq"/></g>`,
		"fallback": "coolicons:share-alt-duotone-round",
	});
}

export default Component;
