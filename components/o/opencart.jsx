import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9h6a3mpy.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9h6a3mpy"/>`,
		"fallback": "fa6-brands:opencart",
	});
}

export default Component;
