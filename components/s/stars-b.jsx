import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it92y3bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it92y3bcm"/>`,
		"fallback": "mage:stars-b",
	});
}

export default Component;
