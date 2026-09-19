import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glx1udbwe.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glx1udbwe"/>`,
		"fallback": "fa-solid:republican",
	});
}

export default Component;
