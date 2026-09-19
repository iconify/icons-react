import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3gahbc6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3gahbc6k"/>`,
		"fallback": "circum:text-align-center",
	});
}

export default Component;
