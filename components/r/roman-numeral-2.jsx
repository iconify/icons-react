import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhthw0hea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhthw0hea"/>`,
		"fallback": "mdi:roman-numeral-2",
	});
}

export default Component;
