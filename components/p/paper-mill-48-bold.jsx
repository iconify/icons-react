import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwjrqmb9j.css';
import '../../css/c/casff0y7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwjrqmb9j"/><path class="casff0y7v"/>`,
		"fallback": "energy-icons:paper-mill-48-bold",
	});
}

export default Component;
