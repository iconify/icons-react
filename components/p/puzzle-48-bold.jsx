import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml8ltyb0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml8ltyb0y"/>`,
		"fallback": "energy-icons:puzzle-48-bold",
	});
}

export default Component;
