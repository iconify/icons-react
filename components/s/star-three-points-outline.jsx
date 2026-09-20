import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyo4gfb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyo4gfb5u"/>`,
		"fallback": "mdi:star-three-points-outline",
	});
}

export default Component;
