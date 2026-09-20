import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1en0g5bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1en0g5bu"/>`,
		"fallback": "mingcute:rewind-forward-square-30-fill",
	});
}

export default Component;
