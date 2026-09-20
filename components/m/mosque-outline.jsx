import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/netb8tell.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="netb8tell"/>`,
		"fallback": "mdi:mosque-outline",
	});
}

export default Component;
