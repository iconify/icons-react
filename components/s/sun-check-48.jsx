import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrpvxrlxf.css';
import '../../css/p/py4nxfbnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrpvxrlxf"/><path class="py4nxfbnh"/>`,
		"fallback": "energy-icons:sun-check-48",
	});
}

export default Component;
