import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr7o7gxzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr7o7gxzj"/>`,
		"fallback": "mdi:monitor-dashboard",
	});
}

export default Component;
