import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccxqt5b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccxqt5b2f"/>`,
		"fallback": "mdi:rectangle-outline",
	});
}

export default Component;
