import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8mx5jbcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8mx5jbcs"/>`,
		"fallback": "energy-icons:user-check-48-bold",
	});
}

export default Component;
