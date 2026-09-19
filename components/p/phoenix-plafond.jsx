import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyjq7qbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyjq7qbyo"/>`,
		"fallback": "cbi:phoenix-plafond",
	});
}

export default Component;
