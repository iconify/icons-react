import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqxpa1b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqxpa1b7q"/>`,
		"fallback": "mdi:interaction-tap",
	});
}

export default Component;
