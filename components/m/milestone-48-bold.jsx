import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv2a2jbrl.css';
import '../../css/x/x41cd7j7k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv2a2jbrl"/><path class="x41cd7j7k"/>`,
		"fallback": "energy-icons:milestone-48-bold",
	});
}

export default Component;
