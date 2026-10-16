import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tv3oe1t5b.css';
import '../../css/f/f4-h3h13g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 22.2 3.36)" class="tv3oe1t5b"/><path class="f4-h3h13g"/></g>`,
		"fallback": "andrsrxn:mirror-left",
	});
}

export default Component;
