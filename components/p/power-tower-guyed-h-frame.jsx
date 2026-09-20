import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8d1u194e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8d1u194e"/>`,
		"fallback": "roentgen:power-tower-guyed-h-frame",
	});
}

export default Component;
