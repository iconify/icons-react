import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1rk5ijxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1rk5ijxj"/>`,
		"fallback": "streamline-ultimate:technology-device-wearable-smart-watch-1",
	});
}

export default Component;
