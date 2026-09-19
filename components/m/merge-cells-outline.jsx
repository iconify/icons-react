import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kflreebxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kflreebxp"/>`,
		"fallback": "flowbite:merge-cells-outline",
	});
}

export default Component;
