import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvq7vy1ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvq7vy1ky"/>`,
		"fallback": "hugeicons:swipe-right-02",
	});
}

export default Component;
