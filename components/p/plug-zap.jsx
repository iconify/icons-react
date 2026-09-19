import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhz56lber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhz56lber"/>`,
		"fallback": "hugeicons:plug-zap",
	});
}

export default Component;
