import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef1z18cck.css';
import '../../css/e/e0lzhpbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ef1z18cck"/><path class="e0lzhpbfo"/></g>`,
		"fallback": "coolicons:medal-duotone-round",
	});
}

export default Component;
