import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kysafccpi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kysafccpi"/>`,
		"fallback": "energy-icons:slider-horizontal-20-bold",
	});
}

export default Component;
