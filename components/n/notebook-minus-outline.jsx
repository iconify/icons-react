import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntrjd3bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntrjd3bcy"/>`,
		"fallback": "mdi:notebook-minus-outline",
	});
}

export default Component;
