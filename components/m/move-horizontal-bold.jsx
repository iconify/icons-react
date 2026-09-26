import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bottp98ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bottp98ly"/>`,
		"fallback": "solar:move-horizontal-bold",
	});
}

export default Component;
