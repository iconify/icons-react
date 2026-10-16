import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acxrbhb_k.css';
import '../../css/c/c0boadcbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="acxrbhb_k"/><path class="c0boadcbs"/></g>`,
		"fallback": "andrsrxn:moon-fog",
	});
}

export default Component;
