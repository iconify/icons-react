import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh0yh6tgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh0yh6tgh"/>`,
		"fallback": "energy-icons:more-vertical-48-bold",
	});
}

export default Component;
