import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vomyfrboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vomyfrboa"/>`,
		"fallback": "andrsrxn:text-tracking",
	});
}

export default Component;
