import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcvgcht7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcvgcht7k"/>`,
		"fallback": "mdi:ohm",
	});
}

export default Component;
