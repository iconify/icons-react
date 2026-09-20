import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6dew0bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6dew0bgh"/>`,
		"fallback": "mingcute:rewind-forward-10-line",
	});
}

export default Component;
