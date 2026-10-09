import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uanbx55lc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uanbx55lc"/>`,
		"fallback": "energy-icons:star-20-bold",
	});
}

export default Component;
