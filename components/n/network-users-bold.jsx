import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi_o19b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi_o19b1x"/>`,
		"fallback": "streamline-ultimate:network-users-bold",
	});
}

export default Component;
