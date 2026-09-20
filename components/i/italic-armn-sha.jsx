import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud7qzlq2q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud7qzlq2q"/>`,
		"fallback": "ooui:italic-armn-sha",
	});
}

export default Component;
