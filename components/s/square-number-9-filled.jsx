import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhv7_-hzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhv7_-hzt"/>`,
		"fallback": "tabler:square-number-9-filled",
	});
}

export default Component;
