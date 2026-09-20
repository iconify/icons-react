import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f48o6q92l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f48o6q92l"/>`,
		"fallback": "mdi:sink-outline",
	});
}

export default Component;
