import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax-ov7ovr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax-ov7ovr"/>`,
		"fallback": "mdi:poker-spade",
	});
}

export default Component;
