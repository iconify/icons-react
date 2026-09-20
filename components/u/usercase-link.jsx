import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6eep0b6r.css';
import '../../css/h/h-31vmbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x6eep0b6r"/><path class="h-31vmbcr"/></g>`,
		"fallback": "tdesign:usercase-link",
	});
}

export default Component;
