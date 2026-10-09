import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc5lbibdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc5lbibdl"/>`,
		"fallback": "energy-icons:volume-low-48-bold",
	});
}

export default Component;
