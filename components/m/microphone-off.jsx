import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjzh2jrou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjzh2jrou"/>`,
		"fallback": "circum:microphone-off",
	});
}

export default Component;
