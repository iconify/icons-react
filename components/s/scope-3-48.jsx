import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0b5pxbkr.css';
import '../../css/w/wj_mk056d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0b5pxbkr"/><path class="wj_mk056d"/>`,
		"fallback": "energy-icons:scope-3-48",
	});
}

export default Component;
