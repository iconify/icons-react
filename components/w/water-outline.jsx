import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8vq15gee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8vq15gee"/>`,
		"fallback": "solar:water-outline",
	});
}

export default Component;
