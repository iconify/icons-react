import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jon4cnb6x.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jon4cnb6x"/>`,
		"fallback": "fa-solid:shipping-fast",
	});
}

export default Component;
