import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y06ns3bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y06ns3bwm"/>`,
		"fallback": "solar:videocamera-outline",
	});
}

export default Component;
