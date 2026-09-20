import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysj7deb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysj7deb4r"/>`,
		"fallback": "mdi:package-open-outline",
	});
}

export default Component;
