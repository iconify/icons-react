import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7tx827ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7tx827ws"/>`,
		"fallback": "lucide:server-plus",
	});
}

export default Component;
