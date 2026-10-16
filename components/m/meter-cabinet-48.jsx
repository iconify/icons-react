import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neu7wrbqd.css';
import '../../css/c/cero_9xdu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neu7wrbqd"/><path class="cero_9xdu"/>`,
		"fallback": "energy-icons:meter-cabinet-48",
	});
}

export default Component;
