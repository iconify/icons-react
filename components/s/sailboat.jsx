import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc5w5cbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc5w5cbbq"/>`,
		"fallback": "noviair:sailboat",
	});
}

export default Component;
