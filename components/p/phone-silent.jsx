import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi78k2ips.css';
import '../../css/x/xy9-6wbyv.css';
import '../../css/p/pvjbuzbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vi78k2ips"/><path class="xy9-6wbyv"/><path class="pvjbuzbhy"/></g>`,
		"fallback": "streamline-cyber-color:phone-silent",
	});
}

export default Component;
