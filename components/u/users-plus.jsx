import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sj404-ble.css';
import '../../css/y/yd-sci8gn.css';
import '../../css/z/zll8l-bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sj404-ble wm-k"/><path class="wm-a yd-sci8gn"/><path class="wm-s zll8l-bne"/></g>`,
		"fallback": "withicons-bauhaus:users-plus",
	});
}

export default Component;
