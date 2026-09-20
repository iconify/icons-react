import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck7do9bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck7do9bfi"/>`,
		"fallback": "mdi:seat-outline",
	});
}

export default Component;
