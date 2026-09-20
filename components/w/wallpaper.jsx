import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sma7-s9ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sma7-s9ss"/>`,
		"fallback": "mdi:wallpaper",
	});
}

export default Component;
