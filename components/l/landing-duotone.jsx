import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igwz4qbul.css';
import '../../css/e/e3b2urw8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="igwz4qbul"/><path class="e3b2urw8z"/></g>`,
		"fallback": "si:landing-duotone",
	});
}

export default Component;
