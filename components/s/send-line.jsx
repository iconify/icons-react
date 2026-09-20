import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n12-wsb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n12-wsb5c"/>`,
		"fallback": "majesticons:send-line",
	});
}

export default Component;
