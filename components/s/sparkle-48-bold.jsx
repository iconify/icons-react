import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbnsb3bgj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbnsb3bgj"/>`,
		"fallback": "energy-icons:sparkle-48-bold",
	});
}

export default Component;
