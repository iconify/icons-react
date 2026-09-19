import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dirql1bho.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dirql1bho"/>`,
		"fallback": "garden:shapes-stroke-12",
	});
}

export default Component;
