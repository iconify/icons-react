import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_l8cd96n.css';
import '../../css/y/yo_3w-v9d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_l8cd96n"/><path class="yo_3w-v9d"/>`,
		"fallback": "energy-icons:user-x-20-bold",
	});
}

export default Component;
