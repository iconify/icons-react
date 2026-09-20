import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea1_mnhta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea1_mnhta"/>`,
		"fallback": "mdi:rewind-15",
	});
}

export default Component;
