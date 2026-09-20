import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kel5pebld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kel5pebld"/>`,
		"fallback": "mdi:piano",
	});
}

export default Component;
