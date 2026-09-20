import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt7tz5iod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dt7tz5iod"/>`,
		"fallback": "solar:music-note-outline",
	});
}

export default Component;
