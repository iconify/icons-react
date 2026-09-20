import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le1y_9kop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le1y_9kop"/>`,
		"fallback": "mage:stars-c-fill",
	});
}

export default Component;
