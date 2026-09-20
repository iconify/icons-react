import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfjf88b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfjf88b7m"/>`,
		"fallback": "mdi:outbox",
	});
}

export default Component;
