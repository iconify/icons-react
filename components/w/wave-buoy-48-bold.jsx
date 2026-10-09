import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhx9-1bok.css';
import '../../css/p/p47yd3vrn.css';
import '../../css/q/qjqywbfqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhx9-1bok"/><path class="p47yd3vrn"/><path class="qjqywbfqp"/>`,
		"fallback": "energy-icons:wave-buoy-48-bold",
	});
}

export default Component;
