import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj2y_bb9h.css';
import '../../css/u/u01yqubev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj2y_bb9h"/><path class="u01yqubev"/>`,
		"fallback": "energy-icons:soda-can-48-bold",
	});
}

export default Component;
