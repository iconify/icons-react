import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy7x08bdq.css';

const viewBox = {"width":472,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy7x08bdq"/>`,
		"fallback": "zmdi:thumb-down",
	});
}

export default Component;
