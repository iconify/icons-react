import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg8paqbeg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg8paqbeg"/>`,
		"fallback": "fa6-solid:person-walking-with-cane",
	});
}

export default Component;
