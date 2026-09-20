import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfayajq1j.css';
import '../../css/d/do8b11bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gfayajq1j"/><path class="do8b11bzo"/></g>`,
		"fallback": "majesticons:view-boards-line",
	});
}

export default Component;
