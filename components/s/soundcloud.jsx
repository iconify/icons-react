import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6uon9bsp.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6uon9bsp"/>`,
		"fallback": "fa6-brands:soundcloud",
	});
}

export default Component;
