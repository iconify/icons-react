import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn7kzrrju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn7kzrrju"/>`,
		"fallback": "mdi:toaster-oven",
	});
}

export default Component;
