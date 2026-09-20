import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfjvo8v9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfjvo8v9e"/>`,
		"fallback": "mdi:opacity",
	});
}

export default Component;
