import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4mq8zejn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4mq8zejn"/>`,
		"fallback": "mdi:music-note-off",
	});
}

export default Component;
