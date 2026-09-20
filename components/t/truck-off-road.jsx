import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4e7c1v5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4e7c1v5x"/>`,
		"fallback": "mdi:truck-off-road",
	});
}

export default Component;
