import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h72dw-q8s.css';
import '../../css/a/az0wvsxpv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h72dw-q8s"/><path class="az0wvsxpv"/>`,
		"fallback": "energy-icons:kick-scooter-48-bold",
	});
}

export default Component;
