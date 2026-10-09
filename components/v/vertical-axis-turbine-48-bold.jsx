import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj5h1jbsa.css';
import '../../css/i/ih47sreee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj5h1jbsa"/><path class="ih47sreee"/>`,
		"fallback": "energy-icons:vertical-axis-turbine-48-bold",
	});
}

export default Component;
