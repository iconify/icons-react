import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p44ku7_ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p44ku7_ie"/>`,
		"fallback": "sidekickicons:keyboard",
	});
}

export default Component;
