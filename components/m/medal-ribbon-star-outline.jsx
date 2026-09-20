import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vubm05b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vubm05b4z"/>`,
		"fallback": "solar:medal-ribbon-star-outline",
	});
}

export default Component;
