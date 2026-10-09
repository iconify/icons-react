import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrpvxrlxf.css';
import '../../css/v/v-3r9t8cb.css';
import '../../css/c/cal94qbrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrpvxrlxf"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`,
		"fallback": "energy-icons:sun-plus-48",
	});
}

export default Component;
