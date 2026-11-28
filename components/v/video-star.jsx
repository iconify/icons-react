import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on7sy0u4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on7sy0u4d"/>`,
		"fallback": "noviair:video-star",
	});
}

export default Component;
