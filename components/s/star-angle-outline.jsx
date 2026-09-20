import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb-9d2bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb-9d2bep"/>`,
		"fallback": "solar:star-angle-outline",
	});
}

export default Component;
