import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsp3hvgtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsp3hvgtp"/>`,
		"fallback": "mdi:lotion",
	});
}

export default Component;
