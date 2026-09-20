import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gaf8fo0hg.css';
import '../../css/m/mfu3x7brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gaf8fo0hg"/><path class="mfu3x7brs"/></g>`,
		"fallback": "tabler:paw-filled",
	});
}

export default Component;
