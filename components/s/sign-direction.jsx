import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-5v3uhca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-5v3uhca"/>`,
		"fallback": "mdi:sign-direction",
	});
}

export default Component;
