import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg0y7c3_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg0y7c3_u"/>`,
		"fallback": "mdi:shop-off-outline",
	});
}

export default Component;
