import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwz11jqdw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwz11jqdw"/>`,
		"fallback": "energy-icons:trapezoid-48-bold",
	});
}

export default Component;
