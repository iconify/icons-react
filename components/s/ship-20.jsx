import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnpp6kxet.css';
import '../../css/o/o1nbqcbpn.css';
import '../../css/k/k8gd1dj3o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnpp6kxet"/><path class="o1nbqcbpn"/><path class="k8gd1dj3o"/>`,
		"fallback": "energy-icons:ship-20",
	});
}

export default Component;
