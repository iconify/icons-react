import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy29vdbwc.css';
import '../../css/p/p8jj4km5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy29vdbwc"/><path class="p8jj4km5n"/>`,
		"fallback": "token:ixt",
	});
}

export default Component;
