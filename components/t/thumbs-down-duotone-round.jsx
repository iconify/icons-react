import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cia03h47k.css';
import '../../css/s/sfj3jr60e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cia03h47k"/><path class="sfj3jr60e"/></g>`,
		"fallback": "coolicons:thumbs-down-duotone-round",
	});
}

export default Component;
