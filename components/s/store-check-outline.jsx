import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsfxc0bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsfxc0bui"/>`,
		"fallback": "mdi:store-check-outline",
	});
}

export default Component;
