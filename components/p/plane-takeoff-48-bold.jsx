import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddu1i-bce.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddu1i-bce"/>`,
		"fallback": "energy-icons:plane-takeoff-48-bold",
	});
}

export default Component;
