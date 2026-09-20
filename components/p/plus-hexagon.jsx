import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw0z-bnbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw0z-bnbz"/>`,
		"fallback": "mynaui:plus-hexagon",
	});
}

export default Component;
