import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy8rz_due.css';
import '../../css/a/ar5qe8n4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jy8rz_due"/><path class="ar5qe8n4p"/></g>`,
		"fallback": "coolicons:toggle-left-duotone-round",
	});
}

export default Component;
