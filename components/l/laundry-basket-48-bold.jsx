import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9xk66b5z.css';
import '../../css/k/k8q9q9bme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9xk66b5z"/><path class="k8q9q9bme"/>`,
		"fallback": "energy-icons:laundry-basket-48-bold",
	});
}

export default Component;
