import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz3csgbap.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz3csgbap"/>`,
		"fallback": "energy-icons:layout-dashboard-20-bold",
	});
}

export default Component;
