import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn6igabhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn6igabhr"/>`,
		"fallback": "tdesign:video-camera-dollar-filled",
	});
}

export default Component;
