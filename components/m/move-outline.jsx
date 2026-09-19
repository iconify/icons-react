import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl6zy2brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl6zy2brn"/>`,
		"fallback": "basil:move-outline",
	});
}

export default Component;
