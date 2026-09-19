import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nus_c7byl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nus_c7byl"/>`,
		"fallback": "fa7-brands:opencart",
	});
}

export default Component;
