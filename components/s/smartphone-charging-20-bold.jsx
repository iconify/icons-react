import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndqwi9bcc.css';
import '../../css/h/h5s-pvbvf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndqwi9bcc"/><path class="h5s-pvbvf"/>`,
		"fallback": "energy-icons:smartphone-charging-20-bold",
	});
}

export default Component;
