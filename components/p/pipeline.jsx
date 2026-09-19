import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj0y7_bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj0y7_bid"/>`,
		"fallback": "hugeicons:pipeline",
	});
}

export default Component;
