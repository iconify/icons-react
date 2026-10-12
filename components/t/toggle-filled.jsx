import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q4s2dkb-p.css';
import '../../css/c/czmevebqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q4s2dkb-p"/><path class="czmevebqv"/></g>`,
		"fallback": "andrsrxn:toggle-filled",
	});
}

export default Component;
