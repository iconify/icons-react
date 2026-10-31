import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/quezxpb2f.css';
import '../../css/m/mwbe2mb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="quezxpb2f"/><path class="mwbe2mb7v"/></g>`,
		"fallback": "coolicons:map-pin-minus-bulk-round",
	});
}

export default Component;
