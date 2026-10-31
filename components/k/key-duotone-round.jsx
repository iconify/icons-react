import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq8xyrg4z.css';
import '../../css/s/sbzy7l3ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nq8xyrg4z"/><path class="sbzy7l3ov"/></g>`,
		"fallback": "coolicons:key-duotone-round",
	});
}

export default Component;
