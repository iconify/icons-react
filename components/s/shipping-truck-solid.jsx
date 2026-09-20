import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihpe0-b-q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ihpe0-b-q"/>`,
		"fallback": "streamline:shipping-truck-solid",
	});
}

export default Component;
