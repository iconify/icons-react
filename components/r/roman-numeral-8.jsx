import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmjhv4bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmjhv4bre"/>`,
		"fallback": "mdi:roman-numeral-8",
	});
}

export default Component;
