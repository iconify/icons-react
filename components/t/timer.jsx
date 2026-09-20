import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee3w8bc4b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee3w8bc4b"/>`,
		"fallback": "oi:timer",
	});
}

export default Component;
