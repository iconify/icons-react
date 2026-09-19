import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jipve6o3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jipve6o3u"/>`,
		"fallback": "boxicons:shutter-filled",
	});
}

export default Component;
