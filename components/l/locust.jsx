import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh2z3we9u.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh2z3we9u"/>`,
		"fallback": "fa6-solid:locust",
	});
}

export default Component;
