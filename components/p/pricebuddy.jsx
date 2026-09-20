import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba_6bfbsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba_6bfbsb"/>`,
		"fallback": "selfhst:pricebuddy",
	});
}

export default Component;
