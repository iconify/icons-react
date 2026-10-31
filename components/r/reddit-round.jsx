import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4-9nipky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4-9nipky"/>`,
		"fallback": "coolicons:reddit-round",
	});
}

export default Component;
