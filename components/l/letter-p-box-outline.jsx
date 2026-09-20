import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3alhbkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3alhbkd"/>`,
		"fallback": "mdi:letter-p-box-outline",
	});
}

export default Component;
