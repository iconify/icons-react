import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8w6o6bxx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8w6o6bxx"/>`,
		"fallback": "energy-icons:moonset-20-bold",
	});
}

export default Component;
