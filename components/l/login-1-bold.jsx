import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj35_-k0x.css';
import '../../css/o/oqihxmc0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj35_-k0x"/><path class="oqihxmc0v"/>`,
		"fallback": "streamline-ultimate:login-1-bold",
	});
}

export default Component;
