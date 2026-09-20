import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnl50ebfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnl50ebfd"/>`,
		"fallback": "mdi:patio-door-open",
	});
}

export default Component;
