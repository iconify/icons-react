import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsky5lzvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsky5lzvz"/>`,
		"fallback": "mdi:itunes",
	});
}

export default Component;
