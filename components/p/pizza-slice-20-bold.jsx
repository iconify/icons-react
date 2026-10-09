import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6w9hdc9o.css';
import '../../css/p/pi1hrbbzy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6w9hdc9o"/><path class="pi1hrbbzy"/>`,
		"fallback": "energy-icons:pizza-slice-20-bold",
	});
}

export default Component;
