import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f2kn9ibrb.css';
import '../../css/v/vkkt7ybvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="f2kn9ibrb"/><path class="vkkt7ybvn"/></g>`,
		"fallback": "keyline-icons:server-sharp",
	});
}

export default Component;
