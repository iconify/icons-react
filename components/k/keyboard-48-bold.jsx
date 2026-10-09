import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu9rvubvf.css';
import '../../css/e/egkzj7bkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu9rvubvf"/><path class="egkzj7bkm"/>`,
		"fallback": "energy-icons:keyboard-48-bold",
	});
}

export default Component;
