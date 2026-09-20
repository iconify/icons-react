import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcsg_ybgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcsg_ybgi"/>`,
		"fallback": "mdi:power-socket-sg",
	});
}

export default Component;
