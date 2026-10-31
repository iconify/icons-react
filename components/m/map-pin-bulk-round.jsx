import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/quezxpb2f.css';
import '../../css/n/nx6mb0bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="quezxpb2f"/><path class="nx6mb0bpv"/></g>`,
		"fallback": "coolicons:map-pin-bulk-round",
	});
}

export default Component;
