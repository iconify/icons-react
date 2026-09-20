import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzbqii5ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzbqii5ig"/>`,
		"fallback": "mdi:printer-check",
	});
}

export default Component;
