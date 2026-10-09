import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0b5pxbkr.css';
import '../../css/e/ep0q_pklm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0b5pxbkr"/><path class="ep0q_pklm"/>`,
		"fallback": "energy-icons:scope-2-48",
	});
}

export default Component;
