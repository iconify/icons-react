import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve6n4db7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve6n4db7t"/>`,
		"fallback": "mdi:tv-guide",
	});
}

export default Component;
