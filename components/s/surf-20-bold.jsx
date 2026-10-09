import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4rw3bb2u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4rw3bb2u"/>`,
		"fallback": "energy-icons:surf-20-bold",
	});
}

export default Component;
