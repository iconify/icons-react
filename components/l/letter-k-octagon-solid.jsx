import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aujf7fsah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aujf7fsah"/>`,
		"fallback": "mynaui:letter-k-octagon-solid",
	});
}

export default Component;
