import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbu1lpb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbu1lpb0v"/>`,
		"fallback": "mdi:location-right",
	});
}

export default Component;
