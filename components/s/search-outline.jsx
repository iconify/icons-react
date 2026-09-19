import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olv-dy7_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olv-dy7_d"/>`,
		"fallback": "flowbite:search-outline",
	});
}

export default Component;
