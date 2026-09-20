import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgyv4ac-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgyv4ac-t"/>`,
		"fallback": "solar:map-arrow-up-linear",
	});
}

export default Component;
