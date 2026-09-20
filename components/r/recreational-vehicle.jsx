import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1450-bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1450-bps"/>`,
		"fallback": "mdi:recreational-vehicle",
	});
}

export default Component;
