import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp3lsl9jd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp3lsl9jd"/>`,
		"fallback": "mingcute:pencil-3-line",
	});
}

export default Component;
