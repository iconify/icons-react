import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m886tnbdx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m886tnbdx"/>`,
		"fallback": "fa7-brands:python",
	});
}

export default Component;
