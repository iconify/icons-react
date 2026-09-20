import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar1kdeb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar1kdeb3z"/>`,
		"fallback": "mdi:iron-board",
	});
}

export default Component;
