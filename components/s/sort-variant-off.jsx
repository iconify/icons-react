import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnn2f8bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnn2f8bcu"/>`,
		"fallback": "mdi:sort-variant-off",
	});
}

export default Component;
