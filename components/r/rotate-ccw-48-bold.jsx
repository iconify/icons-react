import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7pegcc2c.css';
import '../../css/q/qb0cveb8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7pegcc2c"/><path class="qb0cveb8r"/>`,
		"fallback": "energy-icons:rotate-ccw-48-bold",
	});
}

export default Component;
