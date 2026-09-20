import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtx3_bc3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtx3_bc3u"/>`,
		"fallback": "mdi:toslink",
	});
}

export default Component;
