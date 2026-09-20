import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcmt7s_3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcmt7s_3u"/>`,
		"fallback": "thesvg:issuu",
	});
}

export default Component;
