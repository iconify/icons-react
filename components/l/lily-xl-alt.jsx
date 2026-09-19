import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ion_h5bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ion_h5bia"/>`,
		"fallback": "cbi:lily-xl-alt",
	});
}

export default Component;
