import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uax-zvfsi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uax-zvfsi"/>`,
		"fallback": "dinkie-icons:money-bag-usd",
	});
}

export default Component;
