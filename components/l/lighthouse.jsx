import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt6nh0b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt6nh0b9s"/>`,
		"fallback": "mdi:lighthouse",
	});
}

export default Component;
