import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9gnjlb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9gnjlb5e"/>`,
		"fallback": "mdi:order-bool-descending-variant",
	});
}

export default Component;
