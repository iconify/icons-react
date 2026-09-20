import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw9lk9bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw9lk9bet"/>`,
		"fallback": "mdi:offer",
	});
}

export default Component;
