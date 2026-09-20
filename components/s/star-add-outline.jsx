import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1f3r8b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1f3r8b2q"/>`,
		"fallback": "mdi:star-add-outline",
	});
}

export default Component;
