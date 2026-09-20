import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0qyk6byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0qyk6byi"/>`,
		"fallback": "mage:light-bulb-off-fill",
	});
}

export default Component;
