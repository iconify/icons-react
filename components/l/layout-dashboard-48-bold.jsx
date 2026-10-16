import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7ri8jbte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7ri8jbte"/>`,
		"fallback": "energy-icons:layout-dashboard-48-bold",
	});
}

export default Component;
