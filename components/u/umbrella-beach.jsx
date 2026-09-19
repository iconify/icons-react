import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa6_aehaq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa6_aehaq"/>`,
		"fallback": "fa-solid:umbrella-beach",
	});
}

export default Component;
