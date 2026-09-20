import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asu8uubvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asu8uubvf"/>`,
		"fallback": "mdi:menu-right-outline",
	});
}

export default Component;
