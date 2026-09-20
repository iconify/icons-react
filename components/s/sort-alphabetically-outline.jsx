import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whu9aebkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whu9aebkh"/>`,
		"fallback": "typcn:sort-alphabetically-outline",
	});
}

export default Component;
