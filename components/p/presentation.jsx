import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-8f8cbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-8f8cbaq"/>`,
		"fallback": "iconoir:presentation",
	});
}

export default Component;
