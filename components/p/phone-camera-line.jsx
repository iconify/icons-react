import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh8gqdp9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh8gqdp9h"/>`,
		"fallback": "ri:phone-camera-line",
	});
}

export default Component;
