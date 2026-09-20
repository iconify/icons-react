import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj5co-u0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj5co-u0o"/>`,
		"fallback": "mdi:octagram-plus-outline",
	});
}

export default Component;
