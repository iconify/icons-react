import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss6ee4bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss6ee4bcr"/>`,
		"fallback": "mdi:layers-off-outline",
	});
}

export default Component;
