import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9tupkb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9tupkb2u"/>`,
		"fallback": "ri:p2p-line",
	});
}

export default Component;
