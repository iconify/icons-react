import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd-1kf17z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd-1kf17z"/>`,
		"fallback": "ci:monitor",
	});
}

export default Component;
