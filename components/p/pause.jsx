import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hasd5_p3j.css';
import '../../css/s/sv36czx6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><rect class="hasd5_p3j"/><rect class="sv36czx6n"/></g>`,
		"fallback": "proicons:pause",
	});
}

export default Component;
