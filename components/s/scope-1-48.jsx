import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0b5pxbkr.css';
import '../../css/j/jtr7gubri.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0b5pxbkr"/><path class="jtr7gubri"/>`,
		"fallback": "energy-icons:scope-1-48",
	});
}

export default Component;
