import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhvp3reay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhvp3reay"/>`,
		"fallback": "mdi:speedometer-medium",
	});
}

export default Component;
